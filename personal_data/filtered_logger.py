#!/usr/bin/env python3
"""
Write a function called filter_datum that returns the log
message obfuscated:

Arguments:
fields: a list of strings representing all fields to
obfuscate

redaction: a string representing by what the field will
be obfuscated

message: a string representing the log line

separator: a string representing by which character
is separating all fields in the log line (message)

The function should use a regex to replace occurrences
of certain field values.

filter_datum should be less than 5 lines long and use
re.sub to perform the substitution with a single regex.
"""
import re
import logging
import os
import mysql.connector
from mysql.connector.connection import MySQLConnection
from typing import List

PII_FIELDS = ("email", "name", "phone", "ssn", "password")


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """
        Helps to filter the log
        """
        return filter_datum(
            self.fields,
            self.REDACTION,
            super().format(record),
            self.SEPARATOR
        )


def get_logger() -> logging.Logger:
    """
    Sets up the logger
    """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(RedactingFormatter(list(PII_FIELDS)))
    logger.addHandler(stream_handler)
    return logger


def filter_datum(
        fields: List[str],
        redaction: str,
        message: str,
        separator: str
) -> str:
    """
    Returns a log message obfuscated
    """
    return re.sub(
        rf"({'|'.join(fields)})=([^{separator}]*)",
        r"\1=" + redaction,
        message
    )


def get_db() -> MySQLConnection:
    """
    Connects to a MySQL database using credentials from environment variables.
    Returns:
        MySQLConnection: a connection object to the database.
    """
    return mysql.connector.connect(
        user=os.getenv("PERSONAL_DATA_DB_USERNAME", "root"),
        password=os.getenv("PERSONAL_DATA_DB_PASSWORD", ""),
        host=os.getenv("PERSONAL_DATA_DB_HOST", "localhost"),
        database=os.getenv("PERSONAL_DATA_DB_NAME")
    )
