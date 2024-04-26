#!/usr/bin/env python3
""" Coroutine asynchrone générant des nombres aléatoires. """

import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine that collects 10 random numbers using async comprehensions.
    """
    # Utilise une compréhension asynchrone pour collecter 10 nombres
    # aléatoires produits par async_generator
    return [number async for number in async_generator()][:10]
