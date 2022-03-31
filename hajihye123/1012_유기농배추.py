import sys
sys.setrecursionlimit(10**6)

input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    global cnt
    if x < 0 or x >= n or y < 0 or y >= m:
        return
    if graph[x][y] == 0:
        return

    graph[x][y] = 0

    for k in range(4):
        dfs(x+dx[k], y+dy[k])


t = int(input())
cnt = 0

for _ in range(t):
    m, n, k = map(int, input().split())
    graph = [[0 for _ in range(m)]for _ in range(n)]

    for i in range(k):
        a, b = map(int, input().split())
        graph[b][a] = 1

    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                dfs(i, j)
                cnt += 1

    print(cnt)
    cnt = 0