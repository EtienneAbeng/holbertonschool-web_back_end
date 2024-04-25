#!/usr/bin/env python3

""" Déclarer une coroutine nommée wait_random. """


import asyncio  # Importer le module asyncio pour la programmation asynchrone
import random   # Importer le module random pour générer des nombres aléatoires



async def wait_random(max_delay: int = 10) -> float:
    # Générer un délai aléatoire entre 0 et max_delay secondes
    random_delay = random.uniform(0, max_delay)

    # Attendre le délai aléatoire
    await asyncio.sleep(random_delay)

    # Renvoyer le délai aléatoire
    return random_delay
