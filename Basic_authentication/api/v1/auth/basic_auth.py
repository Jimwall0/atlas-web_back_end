#!/usr/bin/env python3
"""
BasicAuth module
"""
from api.v1.auth.auth import Auth
import re
import base64


class BasicAuth(Auth):
    """
    BasicAuth class - inherits from Auth
    """
    def extract_base64_authorization_header(
            self,
            authorization_header: str
    ) -> str:
        """Extracts the base 64 from the authorization header"""
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not re.search(r"(Basic\s)", authorization_header):
            return None
        return authorization_header[6:]

    def decode_base64_authorization_header(
            self,
            base64_authorization_header: str
    ) -> str:
        """decode the base 64 authorization header"""
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        try:
            decoded_bytes = base64.b64decode(
                base64_authorization_header,
                validate=True
            )
            return decoded_bytes.decode('utf-8')
        except Exception:
            return None

    def extract_user_credentials(
            self,
            decoded_base64_authorization_header: str
    ) -> (str, str):
        """extract email and password"""
        if decoded_base64_authorization_header is None:
            return None, None
        if not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None

        email, password = decoded_base64_authorization_header.split(':', 1)
        return email, password

    def current_user(self, request=None) -> TypeVar('User'):
        """
        Retrieves the User instance based on the request's Basic Auth header.
        """
        # Step 1: Get the Authorization header
        auth_header = self.authorization_header(request)
        if auth_header is None:
            return None

        # Step 2: Extract the Base64 part
        base64_part = self.extract_base64_authorization_header(auth_header)
        if base64_part is None:
            return None

        # Step 3: Decode the Base64 string
        decoded = self.decode_base64_authorization_header(base64_part)
        if decoded is None:
            return None

        # Step 4: Extract email and password
        email, password = self.extract_user_credentials(decoded)
        if email is None or password is None:
            return None

        return self.user_object_from_credentials(email, password)
