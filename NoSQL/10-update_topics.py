#!/usr/bin/env python3
""" Mettre à jour les sujets d'un document scolaire en fonction du nom de l'école"""

from pymongo import MongoClient

def update_topics(mongo_collection, name, topics):
    """ Mettre à jour les sujets d'un document scolaire en fonction du nom de l'école"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})