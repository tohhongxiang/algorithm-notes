# Depth-First Search

DFS requires:
- A set to keep track of nodes we have visited

1. Initialise an empty set `visited` to keep track of the nodes we have visited
2. Start by calling `dfs` on the root node
   1. Add this item to the visited set
   2. For each child of the current node, if the child has not already been visited, recursively call `dfs` on this node

```py
def dfs(graph, node, visited):
    visited.add(node)

    # process current node
    print(node)

    # go through all unvisited children of current node
    for child in graph[node]:
        if child not in visited:
            dfs(graph, child, visited)

graph = {'0': set(['1', '2']),
         '1': set(['0', '3', '4']),
         '2': set(['0']),
         '3': set(['1']),
         '4': set(['2', '3'])}

dfs(graph, '0')
```

## Algorithm Complexity

Time complexity: $O(V + E)$, where $V$ is the number of nodes, and $E$ is the number of edges

Space complexity: $O(V)$

## Resources

- https://www.programiz.com/dsa/graph-dfs
- https://www.youtube.com/watch?v=7fujbpJ0LB4