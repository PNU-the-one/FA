from collections import deque


def bfs():
    queue = deque()
    queue.append(n)
    while queue:
        x = queue.popleft()
        if x == k:
            print(graph[x])
            break

        for j in (x-1, x+1, x*2):
            if 0 <= j <= MAX and not graph[j]:
                graph[j] = graph[x] + 1
                queue.append(j)


n, k = map(int, input().split())
MAX = 100000
graph = [0] * (MAX + 1)

bfs()