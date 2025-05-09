#!/usr/bin/env python3
"""
Write a type-annotated function
make_multiplier that takes a float multiplier as argument and
returns a function that multiplies a float by multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Makes a new function to multiply
    """
    def temp(number: float):
        """
        Actual function that multiplies
        """
        return number * multiplier
    return temp
