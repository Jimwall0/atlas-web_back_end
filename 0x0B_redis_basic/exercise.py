#!/usr/bin/env python3
"""
Write a string to Redis
"""
import redis
import uuid
from typing import Union, Optional, Callable


class Cache:
    """
    Class setup to use Redis
    """
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

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
        return self.get(key, fn=lambda d: int(d))
