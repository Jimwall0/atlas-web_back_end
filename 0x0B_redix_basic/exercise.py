#!/usr/env/bin python3
"""
Write a string to Redis
"""
import redis
import uuid
from typing import Union


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
