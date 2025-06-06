#!/usr/bin/env python3
"""
Makes a new test for client
"""
import unittest
from parameterized import parameterized, parameterized_class
from unittest.mock import patch, PropertyMock, MagicMock
from client import GithubOrgClient
from fixtures import org_payload, repos_payload, expected_repos, apache2_repos


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

    @patch("client.get_json")
    def test_public_repos(self, mock_get_json):
        # Define mock return values
        test_repos_payload = [
            {"name": "repo1"},
            {"name": "repo2"},
            {"name": "repo3"},
        ]
        mock_get_json.return_value = test_repos_payload
        test_url = "https://api.github.com/orgs/test-org/repos"

        with patch.object(
            GithubOrgClient,
            "_public_repos_url",
            new_callable=PropertyMock
        ) as mock_repos_url:
            mock_repos_url.return_value = test_url
            client = GithubOrgClient("test-org")
            repos = client.public_repos()

            self.assertEqual(repos, ["repo1", "repo2", "repo3"])
            mock_get_json.assert_called_once_with(test_url)
            mock_repos_url.assert_called_once()

    @parameterized.expand([
        (
            "matching_license",
            {"license": {"key": "my_license"}},
            "my_license",
            True),
        ("non_matching_license",
            {"license": {"key": "other_license"}},
            "my_license",
            False),
    ])
    def test_has_license(self, name, repo, license_key, expected):
        result = GithubOrgClient.has_license(repo, license_key)
        self.assertEqual(result, expected)

    @parameterized_class([
        {
            "org_payload": org_payload,
            "repos_payload": repos_payload,
            "expected_repos": expected_repos,
            "apache2_repos": apache2_repos,
        }
    ])
    class TestIntegrationGithubOrgClient(unittest.TestCase):
        @classmethod
        def setUpClass(cls):
            """Start patching requests.get and set return values based on URL."""
            cls.get_patcher = patch("client.requests.get")
            mock_get = cls.get_patcher.start()

            # Mock responses
            def side_effect(url):
                mock_response = MagicMock()
                if url == "https://api.github.com/orgs/test-org":
                    mock_response.json.return_value = cls.org_payload
                elif url == cls.org_payload["repos_url"]:
                    mock_response.json.return_value = cls.repos_payload
                return mock_response

            mock_get.side_effect = side_effect

        @classmethod
        def tearDownClass(cls):
            """Stop patching requests.get"""
            cls.get_patcher.stop()

        def test_public_repos(self):
            """Test full flow of fetching public repos"""
            client = GithubOrgClient("test-org")
            self.assertEqual(client.public_repos(), self.expected_repos)

        def test_public_repos_with_license(self):
            """Test filtering repos by license"""
            client = GithubOrgClient("test-org")
            self.assertEqual(client.public_repos(license="apache-2.0"), self.apache2_repos)


if __name__ == '__main__':
    unittest.main()
