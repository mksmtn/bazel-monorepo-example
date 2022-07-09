import unittest
from projects.services.suggestions.main import suggestions

class TestSuggestions(unittest.TestCase):
  def test_suggestions(self):
    response = suggestions()
    self.assertEqual(len(response['data']), 4)

if __name__ == '__main__':
  unittest.main()
