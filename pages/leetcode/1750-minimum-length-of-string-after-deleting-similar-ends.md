# 1750. Minimum Length of String After Deleting Similar Ends

- https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description

# Solution


1. Initialise 2 pointers. `l` starts at the beginning of the string, while `r` starts at the end of the string
2. While `l < r` (pointers have not crossed each other) and `s[l] == s[r]` (each end is pointing at the same letter)
    1. Move left pointer towards the right until we reach a different character
    2. Move right pointer towards the left until we reach a different character
3. When we break, the left and right pointers will represent the substring that we have after performing all the deletions. We return the length of this string, which is `r - l + 1`

```py
class Solution:
    def minimumLength(self, s: str) -> int:
        l = 0
        r = len(s) - 1

        while l < r and s[l] == s[r]:
            currentChar = s[l]
            
            while l <= r and s[l] == currentChar:
                l += 1

            while l <= r and s[r] == currentChar:
                r -= 1

        return r - l + 1
```