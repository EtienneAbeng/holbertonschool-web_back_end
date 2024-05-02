#!/usr/bin/env python3
""" Fonction Python qui renvoie la liste des écoles ayant un sujet spécifique """


def schools_by_topic(mongo_collection, topic):
    """ Fonction Python qui renvoie la liste des écoles ayant un sujet spécifique """
    return mongo_collection.find({"topics": topic})