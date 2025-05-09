#!/usr/bin/env python3
"""
Annotate the below function’s parameters and return values
with the appropriate types
def element_length(lst):
    return [(i, len(i)) for i in lst]
"""
from typing import Iterator, List, Tuple, Sequence


def element_length(lst: Iterator[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
