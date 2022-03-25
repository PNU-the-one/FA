import sys
from collections import deque

M, N, H = map(int, sys.stdin.readline().split())


G = [[[*map(int, sys.stdin.readline().split())] for _ in range(N)] for _ in range(H)]

D = [(1, 0, 0),(-1, 0, 0),(0, 1, 0),(0, -1, 0), (0, 0, 1), (0, 0, -1)]
## 동 서, 남 북, 위 아래(X, Y, Z)

start = []

print(G)

for i in range(N):
    for j in range(M):
        for k in range(H):
            if G[k][i][j] == 1:
                start.append((j, i, k))


def bfs(s):
    Q = deque(s)
    cnt = 0

    

    while Q:
        
        X, Y, Z = Q.popleft()

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]
            nZ = Z + d[2]

            
            if nX < 0 or nX >= M or nY < 0 or nY >= N or nZ < 0 or nZ >= H:
                continue
            
            if G[nZ][nY][nX] == 0:
                G[nZ][nY][nX] = G[Z][Y][X] + 1
                Q.append((nX, nY, nZ))
        

    for i in range(N):
        for j in range(M):
            for k in range(H):
                if G[k][i][j] == 0:
                    return -1



    return G[Z][Y][X]-1



print(bfs(start))





            



    
