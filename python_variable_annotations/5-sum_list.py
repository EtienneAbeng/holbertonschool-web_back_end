#!/usr/bin/env python3
"""Write a type-annotated function sum_list with list input of float"""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """ Return the sum of the list of floats """
    return sum(input_list)
