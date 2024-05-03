#!/usr/bin/env python3
 """
 Retourne un tuple de taille deux contenant un indice de départ et un indice de fin
 """
def index_range(page: int, page_size: int) -> tuple[int, int]:
    """"""
    
    indice_debut = (page - 1) * page_size
    indice_fin = page * page_size
    return indice_debut, indice_fin
