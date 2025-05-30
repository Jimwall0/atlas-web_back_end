#!/usr/bin/env python3
"""
BasicAuth module
"""
from api.v1.auth.auth import Auth
import re


class BasicAuth(Auth):
    """
    BasicAuth class - inherits from Auth
    """
    def extract_base64_authorization_header(
            self,
            authorization_header: str
    ) -> str:
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not re.search(r"(Basic\s)", authorization_header):
            return None
        return authorization_header[6:]
        
