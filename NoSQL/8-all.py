#!/usr/bin/ env python3
""" Lister tous les documents dans une collections"""
from pymongo import MongoClient

def list_all(mongo_collection):
    """Lister tous les documents dans une collections"""
    if not mongo_collection:
        return []
    return list(mongo_collection.find())
