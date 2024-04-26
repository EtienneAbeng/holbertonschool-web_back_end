#!/usr/bin/env python3
""" Coroutine asynchrone générant des nombres aléatoires. """

import asyncio
from asyncio import sleep
from random import uniform
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Coroutine that generates 10 random numbers between 0 and 10."""
    for index in range(10):
        await sleep(1)  # Attente asynchrone de 1 seconde
        yield uniform(0, 10)  # Renvoie un nombre aléatoire entre 0 et 10


async def print_yielded_values():
    """Function that consumes the values produced by async_generator
       and prints them."""
    result = [number async for number in async_generator()]
    print(result)

# Exécution de la coroutine print_yielded_values
asyncio.run(print_yielded_values())
