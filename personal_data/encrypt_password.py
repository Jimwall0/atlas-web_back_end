#!/usr/bin/env python3
"""
Encrypt your password
"""
import bcrypt


def hash_password(password: str) -> str:
    """
    Encrypt password and salt it before return
    """
    return bcrypt.hashpw(password, bcrypt.gensalt())
