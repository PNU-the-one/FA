from collections import deque

m, n = map(int, input().split())
graph = []
queue = deque([])
for i in range(n):
    graph.append(list(map(int, input().split())))

    for j in range(m):
        if graph[i][j] == 1:
            queue.append([i, j])

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs():
    while queue:
        x, y = queue.popleft()

        for i in range(4):
            xx = x + dx[i]
            yy = y + dy[i]
            if 0 <= xx < n and 0 <= yy < m and graph[xx][yy] == 0:
                queue.append([xx, yy])
                graph[xx][yy] = graph[x][y] + 1


bfs()
ans = 0

for i in graph:
    for j in i:
        if j == 0:
            print(-1)
            exit(0)
        ans = max(ans, j)
print(ans-1)