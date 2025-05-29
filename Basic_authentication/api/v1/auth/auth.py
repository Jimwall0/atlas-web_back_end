#!/usr/bin/env python3
"""
Manage Api application
"""
from flask import request
from typing import List, TypeVar
import re


class Auth():
    """
    Auth class
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Requires an auth
        """
        if path is None:
            return True
        if excluded_paths is None or len(excluded_paths) == 0:
            return True
        for current in excluded_paths:
            if re.search(rf"{path}/?", current):
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """Authorization a header"""
        if request is None:
            return None
        return request.headers.get("Authorization")

    def current_user(self, request=None) -> TypeVar('User'):
        """Returns the current user"""
        return None
