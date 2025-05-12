#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into a
new function task_wait_n. The code is nearly identical
to wait_n except task_wait_random is being called.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Simply makes a corotine task
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task


async def task_wait_n(n: int, max_delay: int) -> asyncio.Task:
    """
    Returns a number of corotine tasks
    """
    tempList = []
    waitList = []
    for i in range(n):
        tempList.append(task_wait_random(max_delay))
    for coro in asyncio.as_completed(tempList):
        waitList.append(await coro)
    return waitList
