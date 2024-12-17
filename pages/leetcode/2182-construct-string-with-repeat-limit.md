# 2182. Construct String With Repeat Limit

- https://leetcode.com/problems/construct-string-with-repeat-limit/

## Solution

1. We create a max heap of all the characters and its corresponding counts in `s`.
2. We also intialize an array `result`, which we will `join` at the end to return it as the answer.
3. While we still have characters to use,
   1. We pop out the lexicographically largest character in the heap along with its corresponding counts.
   2. We check how many times we can use it in a row (which will be the minimum of `repeat_limit` and its own `count`).
   3. We append this character to the result, with however many times we can actually use it.
   4. If the current character still can be used (`count > to_use`), and the heap is not empty:
      1. We pop the next lexicographically largest character (and its corresponding count) from the heap
      2. We append 1 of this character to our result
      3. If we still have more of the next character to use (`next_count > 1`), we push it back into the heap, updating the count along with it.
      4. We then push back the current character into the heap, updating the count along with it.

```python
class Solution:
    def repeatLimitedString(self, s: str, repeat_limit: int) -> str:
        max_heap = [(-ord(character), count) for character, count in collections.Counter(s).items()]
        heapify(max_heap)
        result = []

        while max_heap: # while we have characters to use
            negative_ord, count = heappop(max_heap) # pop out the lexicographically largest character
            character = chr(-negative_ord)

            to_use = min(count, repeat_limit) # check how many times we can use it
            result.append(character * to_use) # and append it to the result

            if count > to_use and max_heap: # if we still have some of the current character remaining to use
                next_negative_ord, next_count = heappop(max_heap) # get the next lexicographically largest character
                result.append(chr(-next_negative_ord)) # and append it to the result
                if next_count > 1: # if we still have more of the next character
                    heappush(max_heap, (next_negative_ord, next_count - 1)) # push it back into the heap

                heappush(max_heap, (negative_ord, count - to_use)) # push our current character back into the heap

        return "".join(result)
```

For a string `s` of length $N$, and $K$ unique characters in `s`:

- Time complexity: $O(N \log K)$.

  There are $K$ nodes in the max heap (1 node per unique character), and each heap operation (push/pop) takes $O(\log K)$ time.

  The worst case scenario occurs if we perform 2 heap operations for every character in the string, which would be a total of $O(N)$ heap operations.

  Therefore, the overall time complexity is $O(N \log K)$

- Space complexity: $O(K)$.

  There are $K$ nodes in the max heap (1 node per unique character), and each heap operation (push/pop) takes $O(\log K)$ time.
