#!/usr/bin/env python3

import asyncio
import time
from typing import Callable

""" Mesure le temps d'exécution total pour wait_n(n, max_delay) et renvoie total_time / n. """

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps d'exécution total pour wait_n(n, max_delay) et renvoie total_time / n.
    """
    # Début du chronomètre
    start_time = time.time()

    # Appelle wait_n et mesure le temps d'exécution
    asyncio.run(wait_n(n, max_delay))

    # Fin du chronomètre
    end_time = time.time()

    # Calcule le temps total
    total_time = end_time - start_time

    # Calcule le temps moyen par tâche
    avg_time_per_task = total_time / n

    # Renvoie le temps moyen par tâche
    return avg_time_per_task
