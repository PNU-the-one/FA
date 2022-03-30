import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
m = int(input())


def bfs(graph, v, visited, res):
    visited[v] = True
    queue = deque([v])

    while queue:
        v = queue.popleft()
        res += 1

        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

    return res


graph = [[]for _ in range(n + 1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1, n+1):
    graph[i].sort()

visited = [False] * (n + 1)
print(bfs(graph, 1, visited, 0) - 1)