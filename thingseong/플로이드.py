import sys

INF = int(1e9)

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())


G = [[INF] * (N+1) for _ in range(N+1)]

for i in range(1,N+1): 
    G[i][i] = 0

for _ in range(M):
    u, v, w = map(int, sys.stdin.readline().split())
    G[u][v] = min(G[u][v], w)


for k in range(1,N+1): 
    for i in range(1,N+1):
        for j in range(1,N+1):
            G[i][j] = min(G[i][j], G[i][k] + G[k][j])


for i in range(1,N+1): 
    for j in range(1,N+1):
        if G[i][j] == INF:
            print(0, end=" ")
        else:
            print(G[i][j], end=" ")
    print()

    



    

    

    







            
        


    
















            



    
