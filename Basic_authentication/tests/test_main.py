#!/usr/bin/env python3
"""
Tests the basic math class
"""
import unittest


class Calculator:
    def divide(self, dividend, divisor):
        if divisor == 0:
            raise ValueError("Cannot divide by zero")
        return dividend / divisor

    def add(self, value1: float, value2: float) -> float:
        return value1 + value2


calculator = Calculator()


class my_test(unittest.TestCase):
    def test_adding_one(self):
        self.assertEqual(calculator.add(1, 1), 2)

    def test_negative1(self):
        self.assertEqual(calculator.add(1, -1), 0)

    def test_negative2(self):
        self.assertEqual(calculator.add(-1, -1), -2)


if __name__ == '__main__':
    unittest.main()
