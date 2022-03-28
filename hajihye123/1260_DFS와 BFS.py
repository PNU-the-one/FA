import sys
from collections import deque

input = sys.stdin.readline
n, m, v = map(int, input().split())


def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)


def bfs(graph, v, visited):
    visited[v] = True
    queue = deque([v])

    while queue:
        v = queue.popleft()
        print(v, end=' ')

        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True


graph = [[]for _ in range(n + 1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1, n+1):
    graph[i].sort()

visited = [False] * (n + 1)
dfs(graph, v, visited)
print()
visited = [False] * (n + 1)
bfs(graph, v, visited)