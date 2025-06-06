#!/usr/bin/env python3
"""
Create a class MRUCache that inherits from BaseCaching and is
a caching system:

You must use self.cache_data - dictionary from the parent
class BaseCaching
You can overload def __init__(self): but don’t forget to call
the parent init: super().__init__()
def put(self, key, item):
Must assign to the dictionary self.cache_data the item value
for the key key.
If key or item is None, this method should not do anything.
If the number of items in self.cache_data is higher that
BaseCaching.MAX_ITEMS:
you must discard the most recently used item (MRU algorithm)
you must print DISCARD: with the key discarded and following
by a new line
def get(self, key):
Must return the value in self.cache_data linked to key.
If key is None or if the key doesn’t exist in
self.cache_data, return None.
"""
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """
    Cacheing using LIFO
    """
    def __init__(self):
        super().__init__()
        self.cache_list = []
        for key in self.cache_data:
            self.cache_list.insert(0, key)

    def put(self, key, item):
        """
        Adds elements by using LIFO
        """
        if key is not None and item is not None:
            self.cache_data[key] = item
            self.cache_list.insert(0, key)
            if len(self.cache_list) > self.MAX_ITEMS:
                old_key = self.cache_list.pop(1)
                self.cache_data.pop(old_key)
                print(f"DISCARD: {old_key}")

    def get(self, key):
        """
        Retrieves the value by key
        """
        if key is not None:
            if key in self.cache_data:
                self.cache_list.remove(key)
                self.cache_list.insert(0, key)
                return self.cache_data[key]
        return None
