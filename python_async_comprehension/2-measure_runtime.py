#!/usr/bin/env python3
"""Mesure du temps d'exécution pour quatre compréhensions asynchrones"""

import asyncio
from time import perf_counter

# Importe la coroutine async_comprehension depuis le module précédent
async_comprehension = __import__('1-async_comprehension').async_comprehension

# Définition de la coroutine measure_runtime
async def measure_runtime() -> float:
    """Mesure le temps d'exécution total pour quatre compréhensions
    asynchrones parallèles"""
    start_time = perf_counter()  # Enregistre le temps de départ
    await asyncio.gather(
        async_comprehension(), async_comprehension(),
        async_comprehension(), async_comprehension()
    )
    end_time = perf_counter()  # Enregistre le temps d'arrêt
    return end_time - start_time  # Retourne la différence entre les deux temps
