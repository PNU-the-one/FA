import sys

N = int(sys.stdin.readline())


G = [[*map(int, list(sys.stdin.readline().strip()))] for _ in range(N)]

D = [(1, 0),(-1, 0),(0, 1),(0, -1)] ## 오른쪽 왼쪽, 위, 아래(X, Y)

def bfs(s):
    #visited = [s]
    Q = [s]
    x,y = s
    G[y][x] = 0
    cnt = 1
    
    while Q:
        X, Y = Q[0]
        del Q[0]

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]

            
            if nX < 0 or nX >= N or nY < 0 or nY >= N:
                continue
            if G[nY][nX] == 1:
                G[nY][nX] = 0
                Q.append((nX, nY))
                cnt += 1
    return cnte

res = []
for i in range(N):
    for j in range(N):
        if G[i][j] == 1:
            res.append(bfs((j,i)))
print(len(res))
res.sort()
print(*res, end=" ")





            



    
