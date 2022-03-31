import sys

INF = int(1e9)


V, E = map(int, sys.stdin.readline().split())
K = int(sys.stdin.readline())

N = [[] for i in range(V+1)]
visited = [False] * (V+1)
distance = [INF] * (V+1)

for _ in range(E):
    u, v, w = map(int, sys.stdin.readline().split())

    N[u].append((v,w))
        
def g():
    m = INF
    index = 0

    for i in range(1, V+1):
        if distance[i] < m and not visited[i]:
            m = distance[i]
            index = i

    return index

def f(s):
    visited[s] = True
    distance[s] = 0

    for i in N[s]:
        v = i[0]
        w = i[1]
        if distance[v] > w:
            distance[v] = w


    for i in range(V-1):
        index = g()
        visited[index] = True
        for n in N[index]:
            v = n[0]
            w = n[1]
            if distance[v] > distance[index] + w:
                distance[v] = distance[index] + w
    






f(K)

for i in range(1, V+1):
    if distance[i] == INF:
        print("INF")
    else:
        print(distance[i])
    


    

    

    







            
        


    
















            



    
