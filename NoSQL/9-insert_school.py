#!/usr/bin/env python3
""" Une fonction Python qui insère un nouveau document dans 
une collection basée sur kwargs"""

from  pymongo import MongoClient

def insert_school(mongo_collection, **kwargs):
    """ Insère un nouveau document dans une collection basée sur les kwargs """
    return mongo_collection.insert_one(kwargs).inserted_id
