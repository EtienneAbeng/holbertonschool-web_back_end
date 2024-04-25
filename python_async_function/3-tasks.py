#!/usr/bin/env python3

import asyncio
from typing import Coroutine

""" Crée une tâche asyncio pour attendre un délai aléatoire entre 0 et max_delay (inclus). """

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée une tâche asyncio pour attendre un délai aléatoire entre 0 et max_delay (inclus).
    """
    # Crée une coroutine pour attendre le délai aléatoire
    coroutine = wait_random(max_delay)

    # Crée une tâche asyncio à partir de la coroutine
    task = asyncio.create_task(coroutine)

    # Renvoie la tâche asyncio
    return task
