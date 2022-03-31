n = int(input())
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
cnt = 0
res = []


def dfs(x, y):
    global cnt
    if x < 0 or x >= n or y < 0 or y >= n:
        return False

    if graph[x][y] == 1:
        cnt += 1
        graph[x][y] = 0
        for k in range(4):
            dfs(x+dx[k], y+dy[k])
        return True


for i in range(n):
    for j in range(n):
        if dfs(i, j):
            res.append(cnt)
            cnt = 0

print(len(res))
res.sort()
for i in range(len(res)):
    print(res[i])