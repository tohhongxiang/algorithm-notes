# Breadth First Search

Used to find the shortest path in an **unweighted** graph.

## Finding the Shortest Path

```py
from collections import deque

def bfs(start, end, graph):
    prev = solve(start, graph)
    return reconstructPath(start, end, prev)

def solve(start, graph):
    queue = deque([start]) # queue to keep track of nodes to process

    visited = set() # set to keep track of nodes we have already processed
    visited.add(start)

    previous = {} # { id: parentId } to keep track of the parents of the node

    while len(queue) > 0: # while the queue is not empty
        currentNode = queue.popleft() # pop a node from the front of the queue

        for neighbor in graph[currentNode]: # for each neighbor of the current node
            if neighbor not in visited: # if this neighbor has not been visited yet
                queue.append(neighbor) # add it to the queue to be processed
                visited.add(neighbor) # mark it as visited to prevent duplicate work
                previous[neighbor] = currentNode # mark the neighbor's parent to be the current node

    return previous

def reconstructPath(start, end, previous):
    path = []

    currentNode = end # start from the end
    while True: # keep adding the previous node
        path.append(currentNode) 
        if currentNode not in previous: # until there is no more to add
            break

        currentNode = previous[currentNode]

    path.reverse()

    if path[0] != start: # make sure there was actually a path
        return []

    return path

if __name__ == "__main__":
    print(bfs(0, 4, {0: [1, 2], 1: [2], 2: [3], 3: [1, 2, 4], 4: [0]}))
```

## Keeping Track of Level

For a generic **graph** (graphs can contain cycles), we need to set a visited array to check whether we have visited a node before

```py
import collections

# BFS algorithm
def bfs(graph, root):
    visited, queue = set(), collections.deque([root])
    visited.add(root)
    level = 0

    while len(queue) > 0:
        size = len(queue)

        for i in range(size):
            currentNode = queue.popleft()
            print(f"{level}: {currentNode}")

            for neighbour in graph[currentNode]:
                if neighbour not in visited:
                    visited.add(neighbour)
                    queue.append(neighbour)

        level += 1


if __name__ == '__main__':
    graph = {0: [1, 2], 1: [2], 2: [3], 3: [1, 2]}
    print("Following is Breadth First Traversal: ")
    bfs(graph, 0)
```

## Algorithm Complexity

Time complexity: $O(V + E)$, where $V$ is the number of nodes (vertices) and $E$ is the number of edges.

Space complexity: $O(V)$

## Resources

- https://www.programiz.com/dsa/graph-bfs
- https://www.youtube.com/watch?v=oDqjPvD54Ss