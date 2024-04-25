#!/usr/bin/env python3
""" A type-annotated function floor that takes a float n as argument """

import math  # import the math module


def floor(n: float) -> int:  # type hinting
    """ Return the floor of the float """
    return math.floor(n)
