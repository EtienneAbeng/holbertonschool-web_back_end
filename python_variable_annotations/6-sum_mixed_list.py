#!/usr/bin/python3
""" A type-annotated function sum_mixed_list with list input of mixed """


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ Return the sum of the list of floats and integers"""
    return sum(mxd_lst)
