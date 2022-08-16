import unittest
from libs.python.response.response import response

class TestResponse(unittest.TestCase):
  def test_response(self):
    actual = response(5)
    expected = { "data": 5 }
    self.assertDictEqual(actual, expected)

if __name__ == '__main__':
  unittest.main()
