#!/usr/bin/env python3
"""
Encrypt your password
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """
    Encrypt password and salt it before return
    """
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """
    Checks the password
    """
    if bcrypt.checkpw(password.encode(), hashed_password):
        return True
    else:
        return False
