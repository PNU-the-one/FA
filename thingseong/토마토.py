import sys
from collections import deque

M,N = map(int, sys.stdin.readline().split())


G = [[*map(int, sys.stdin.readline().split())] for _ in range(N)]

D = [(1, 0),(-1, 0),(0, 1),(0, -1)] ## 오른쪽 왼쪽, 위, 아래(X, Y)

start = []

for i in range(N):
    for j in range(M):
        
        if G[i][j] == 1:
            start.append((j, i))


def bfs(s):
    #visited = [s]
    Q = deque(s)
    cnt = 0

    

    while Q:
        
        X, Y = Q.popleft()

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]

            
            if nX < 0 or nX >= M or nY < 0 or nY >= N:
                continue
            
            if G[nY][nX] == 0:
                G[nY][nX] = G[Y][X] + 1
                Q.append((nX, nY))
        

    for i in range(N):
        for j in range(M):
            if G[i][j] == 0:
                return -1



    return G[Y][X]-1



print(bfs(start))





            



    
