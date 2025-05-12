#!/usr/bin/env python3
"""
Import async_comprehension from the previous file and write a
measure_runtime coroutine that will execute async_comprehension
four times in parallel using asyncio.gather.

measure_runtime should measure the total runtime and return it.

Notice that the total runtime is roughly 10 seconds, explain it to yourself.
"""
import asyncio
import time
from typing import List
async_generator = __import__("0-async_generator").async_generator
lock = asyncio.Lock


async def async_comprehension() -> List[float]:
    """
    Comprehension?
    """
    return [i async for i in async_generator()]


async def measure_runtime() -> float:
    """
    Runs the program an extra 4 times
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()
    return end_time - start_time