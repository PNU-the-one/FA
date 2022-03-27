import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())

G = [[*map(int, list(sys.stdin.readline().strip()))] for _ in range(N)]

D = [(1, 0),(-1, 0),(0, 1),(0, -1)] ## 오른쪽 왼쪽, 위, 아래(X, Y)

visited = [[[0]*2 for _ in range(M)] for _ in range(N)]
visited[0][0][0] = 1

def bfs(s):
    Q = deque([s])

    

    while Q:
        X, Y, Z = Q.popleft()

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]

            if X == M-1 and Y == N-1:
                return visited[Y][X][Z]

            
            if nX < 0 or nX >= M or nY < 0 or nY >= N:
                continue
            if G[nY][nX] == 1 and Z == 0:
                visited[nY][nX][1] = visited[Y][X][0] + 1
                Q.append((nX, nY, 1))
                
            
            elif G[nY][nX] == 0 and visited[nY][nX][Z] == 0:
                visited[nY][nX][Z] = visited[Y][X][Z] + 1
                Q.append((nX, nY, Z))


    return -1


print(bfs((0, 0, 0)))




        
        
        






            



    
