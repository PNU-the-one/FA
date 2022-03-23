import sys

N, M = map(int, sys.stdin.readline().split())


G = [[*map(int, list(sys.stdin.readline().strip()))] for _ in range(N)]

D = [(1, 0),(-1, 0),(0, 1),(0, -1)] ## 오른쪽 왼쪽, 위, 아래(X, Y)


def bfs(s):
    #visited = [s]
    Q = [s]
    cnt = 1

    

    while Q:
        X, Y = Q[0]
        del Q[0]

        for d in D:
            nX = X + d[0]
            nY = Y + d[1]

            
            if nX < 0 or nX >= M or nY < 0 or nY >= N:
                continue
            
            if G[nY][nX] == 1:
                G[nY][nX] = G[Y][X] + 1
                Q.append((nX, nY))



    return G[N-1][M-1]



print(bfs((0,0)))





            



    
