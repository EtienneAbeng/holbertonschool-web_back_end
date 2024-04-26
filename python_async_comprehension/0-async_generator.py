#!/usr/bin/env python3``
"""Async Generator"""

import asyncio
import random

# Définition de la coroutine async_generator
async def async_generator():
    """Générateur asynchrone qui produit 10 nombres aléatoires."""
    for index in range(10):  # Boucle 10 fois
        await asyncio.sleep(1)  # Attente asynchrone de 1 seconde
        yield random.uniform(0, 10)  # Renvoie un nombre aléatoire

# Définition de la coroutine print_yielded_values
async def print_yielded_values():
    """Fonction consommant les valeurs produites par async_generator."""
    result = []
    async for i in async_generator():  # Itération asynchrone
        result.append(i)  # Ajoute la valeur à la liste result
    print(result)  # Imprime la liste

# Exécution de la coroutine print_yielded_values
asyncio.run(print_yielded_values())
