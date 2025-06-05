#!/usr/bin/env python3
"""
Makes a new test for client
"""
import unittest
from parameterized import parameterized
from unittest.mock import patch, PropertyMock
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    @parameterized.expand([
        ("google"),
        ('abc'),
    ])
    @patch("client.get_json")
    def test_org(self, org_name, mock_get_json):
        expected_payload = {"login": org_name}
        mock_get_json.return_value = expected_payload
        client = GithubOrgClient(org_name)
        result = client.org
        self.assertEqual(result, expected_payload)
        mock_get_json.assert_called_once_with(
            f"https://api.github.com/orgs/{org_name}"
        )

    def test_public_repos_url(self):
        expected_url = "https://api.github.com/orgs/test-org/repos"
        payload = {"repos_url": expected_url}

        with patch.object(
            GithubOrgClient,
            "org",
            new_callable=PropertyMock
        ) as mock_org:
            mock_org.return_value = payload
            client = GithubOrgClient("test-org")

            result = client._public_repos_url

            self.assertEqual(result, expected_url)
            mock_org.assert_called_once()
