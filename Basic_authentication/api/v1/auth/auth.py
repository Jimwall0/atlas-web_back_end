#!/usr/bin/env python3
"""
Manage Api application
"""
from flask import request
from typing import List, TypeVar


class Auth():
    """
    Auth class
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Requires an auth
        """
        return False

    def authorization_header(self, request=None) -> str:
        """Authorization a header"""
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """Returns the current user"""
        return None