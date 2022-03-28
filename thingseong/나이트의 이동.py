import sys
from collections import deque

D = [(1, 2),(2, 1),(2, -1),(1, -2), (-1, -2),(-2, -1),(-2, 1),(-1, 2)]

def bfs(s, e, G, I):
    Q = deque([s])
    

   
    while Q:
        X, Y = Q.popleft()

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]

            
            if nX < 0 or nX >= I or nY < 0 or nY >= I:
                continue
            
            if G[nY][nX] == 0:
                G[nY][nX] = G[Y][X] + 1
                Q.append((nX, nY))



    return G[e[1]][e[0]] -1


T = int(sys.stdin.readline())


for _ in range(T):
    i = int(sys.stdin.readline())
    g = [[0] * i for _ in range(i)]
    sX, sY = map(int, sys.stdin.readline().split())
    g[sY][sX] = 1
    eX, eY = map(int, sys.stdin.readline().split())
    print(bfs((sX,sY), (eX, eY), g, i))

    
















            



    
