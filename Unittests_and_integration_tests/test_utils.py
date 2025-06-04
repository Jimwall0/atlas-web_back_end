#!/usr/bin/env python3
"""
Testing unittest with python
"""
import unittest
from parameterized import parameterized
from utils import access_nested_map


class TestAccessNestedMap(unittest.TestCase):
    @parameterized.expand([
        ("simple_key", {"a": 1}, ("a",), 1),
        ("nested_dict", {"a": {"b": 2}}, ("a",), {"b": 2}),
        ("deep_nested", {"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, name, nested_map, path, expected):
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ("missing_top_level_key", {}, ("a",), "a"),
        ("missing_nested_key", {"a": 1}, ("a", "b"), "b"),
    ])
    def test_access_nested_map_exception(
        self,
        name,
        nested_map,
        path,
        expected_key
    ):
        with self.assertRaises(KeyError) as cm:
            access_nested_map(nested_map, path)
        self.assertEqual(str(cm.exception), f"'{expected_key}'")


if __name__ == '__main__':
    unittest.main()
