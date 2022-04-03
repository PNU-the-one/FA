import sys

INF = int(1e9)

N, M = map(int, sys.stdin.readline().split())

G = [[INF] * (N+1) for _ in range(N+1)]

for i in range(1,N+1): 
    G[i][i] = 0

for _ in range(M):
    u, v, w = map(int, sys.stdin.readline().split())
    G[u][v] = w


for k in range(1,N+1): 
    for i in range(1,N+1):
        for j in range(1,N+1):
            G[i][j] = min(G[i][j], G[i][k] + G[k][j])


res = INF
for i in range(1,N+1):
    for j in range(i+1,N+1):
        if G[i][j] == INF or G[j][i] == INF:
            continue
        res = min(res, G[i][j] + G[j][i])

print(res if res != INF else -1)

        


    



    

    

    







            
        


    
















            



    
