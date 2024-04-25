#!/usr/bin/python3
""" A type-annotated function make_multiplier that takes a float multiplier as argument"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Return a function that multiplies a float by multiplier"""
    def multiplier_function(number: float) -> float:
        return number * multiplier
    return multiplier_function
