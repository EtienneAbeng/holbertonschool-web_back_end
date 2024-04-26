#!/usr/bin/env python3
""" Tasks """

import asyncio
from typing import List
from asyncio import Task


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Invoque task_wait_random n fois avec le max_delay spécifié.
    Renvoie la liste de tous les délais (valeurs float).
    """
    # Liste pour stocker les délais
    delays = []

    # Crée des tâches pour attendre un délai aléatoire entre 0 et max_delay
    # et les stocke dans une liste
    tasks = [task_wait_random(max_delay) for index in range(n)]

    # Attend que toutes les tâches soient terminées et collecte leurs résultats
    for task in asyncio.as_completed(tasks):
        # Attend la fin de la tâche et récupère le résultat
        delay = await task
        # Ajoute le délai à la liste des délais
        delays.append(delay)

    # Renvoie les délais dans l'ordre croissant
    return delays
