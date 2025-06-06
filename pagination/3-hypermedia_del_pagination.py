#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""
import csv
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    """For your ultimate passion(string matching) :^)
    index: int = None, page_size: int = 10
    """
    def get_hyper_index(
            self,
            index: int = None,
            page_size: int = 10
    ) -> Dict[str, Any]:
        """
        Implement a get_hyper_index method with two integer arguments:
        index with a None default value and page_size with default
        value of 10.

        The method should return a dictionary with the following
        key-value pairs:
        index: the current start index of the return page. That is the
        index of the first item in the current page. For example if
        requesting
        page 3 with page_size 20, and no data was removed from the dataset,
        the current index should be 60.

        next_index: the next index to query with. That should be the
        index of
        the first item after the last item on the current page.

        page_size: the current page size

        data: the actual page of the dataset
        """
        assert isinstance(page_size, int) and page_size > 0

        if index is None:
            index = 0
        else:
            assert isinstance(index, int) and index >= 0

        indexed_data = self.indexed_dataset()
        data = []
        current = index
        count = 0

        while (
            count < page_size
            and current < len(indexed_data) + page_size
        ):
            if current in indexed_data:
                data.append(indexed_data[current])
                count += 1
            current += 1

        return {
            "index": index,
            "next_index": current,
            "page_size": len(data),
            "data": data
        }
