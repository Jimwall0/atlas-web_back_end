#!/usr/bin/env python3
"""
Write a string to Redis
"""
import redis
import uuid
from typing import Union, Optional, Callable, Any
from functools import wraps


def count_calls(method: Callable) -> Callable:
    """
    Makes a function that counts
    """
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs) -> Any:
        """
        Wrapper function that increments call count
        """
        self._redis.incr(key)
        return method(self, *args, **kwargs)
    return wrapper


def call_history(method: Callable) -> Callable:
    """
    Stores input and out puts
    """
    inputs_key = method.__qualname__ + ":inputs"
    output_keys = method.__qualname__ + ":outputs"

    @wraps(method)
    def wrapper(self, *args, **kwargs) -> Any:
        self._redis.rpush(inputs_key, str(args))
        output = method(self, *args, **kwargs)
        self._redis.rpush(output_keys, str(output))
        return output
    return wrapper


class Cache:
    """
    Class setup to use Redis
    """
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        Sets up a key value paring and returns the key
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(
            self,
            key: str,
            fn: Optional[
                Callable[
                    [bytes],
                    Union[str, bytes, int, float]
                ]
            ] = None
    ) -> Optional[Union[str, int, float, bytes]]:
        """
        Returns data converted or not"""
        value = self._redis.get(key)
        if value is None:
            return None
        return fn(value) if fn else value

    def get_str(
            self,
            key: str
    ) -> Optional[str]:
        """
        Returns a string value from Redis
        """
        return self.get(key, fn=lambda d: d.decode("utf-8"))

    def get_int(
            self,
            key: str
    ) -> Optional[int]:
        """
        Returns an int value from Redis
        """
        return self.get(key, fn=lambda d: int(d))

    def replay(self, method: Callable) -> None:
        """Display the call history of a function."""
        redis_client = redis.Redis()
        qualname = method.__qualname__
        inputs_key = qualname + ":inputs"
        outputs_key = qualname + ":outputs"

        call_count = redis_client.get(qualname)
        try:
            count = int(call_count) if call_count else 0
        except ValueError:
            count = 0

        print(f"{qualname} was called {count} times:")

        inputs = redis_client.lrange(inputs_key, 0, -1)
        outputs = redis_client.lrange(outputs_key, 0, -1)

        for input_, output in zip(inputs, outputs):
            input_str = input_.decode("utf-8")
            output_str = output.decode("utf-8")
            print(f"{qualname}(*{input_str}) -> {output_str}")
