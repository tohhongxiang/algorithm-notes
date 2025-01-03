# 2270. Number of Ways to Split Array

- https://leetcode.com/problems/number-of-ways-to-split-array/description/

## Solution

```py
class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        validSplits = 0

        leftSum = 0
        rightSum = sum(nums)

        for i in range(len(nums) - 1):
            leftSum += nums[i]
            rightSum -= nums[i]

            if leftSum >= rightSum:
                validSplits += 1

        return validSplits
```

For a list of $N$ `nums`:
- Time complexity: $O(N)$, iterate through each number once.
- Space complexity: $O(1)$, no extra space to store anything.