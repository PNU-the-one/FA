import sys

INF = int(1e9)


V, E = map(int, sys.stdin.readline().split())

N = [[] for i in range(V+1)]

distance = [INF] * (V+1)

for _ in range(E):
    u, v, w = map(int, sys.stdin.readline().split())
    N[u].append((v,w))


def f(s):
    distance[s] = 0

    for i in range(V):
        for u in range(1, V+1):
            for (v, w) in N[u]:

                if distance[u] != INF and distance[u] + w < distance[v]:
                    distance[v] = distance[u] + w
                    if i == V-1:
                        return True
    return False
    
    






res = f(1)
if res:
    print('-1')
else:
    for i in range(2, V+1):
        if distance[i] == INF:
            print('-1')
        else:
            print(distance[i])
    


    

    

    







            
        


    
















            



    
