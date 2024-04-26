#!/usr/bin/env python3
""" Coroutine qui attend n fois un délai aléatoire dans un intervalle donné """

import asyncio
from typing import List
from random import uniform
from asyncio import create_task


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Invoque wait_random n fois avec le max_delay spécifié.
    Renvoie la liste de tous les délais (valeurs float).
    """
    # Liste pour stocker les délais
    delays = []

    async def wait_random(max_delay: int) -> float:
        """
        Coroutine asynchrone attendant un délai aléatoire entre 0 et max_delay.
        """
        # Génère un délai aléatoire
        delay = uniform(0, max_delay)
        # Attend le délai
        await asyncio.sleep(delay)
        # Renvoie le délai
        return delay

    # Crée des tâches pour wait_random et les stocke dans une liste
    tasks = [create_task(wait_random(max_delay)) for index in range(n)]

    # Attend que toutes les tâches soient terminées et collecte leurs résultats
    for task in tasks:
        # Attend la fin de la tâche et récupère le résultat
        delay = await task
        # Ajoute le délai à la liste des délais
        delays.append(delay)

    # Renvoie les délais dans l'ordre croissant
    return sorted(delays)
