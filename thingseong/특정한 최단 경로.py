import sys

INF = int(1e9)


V, E = map(int, sys.stdin.readline().split())

N = [[] for i in range(V+1)]
#visited = [False] * (V+1)
#distance = [INF] * (V+1)

for _ in range(E):
    u, v, w = map(int, sys.stdin.readline().split())

    N[u].append((v, w))
    N[v].append((u, w))

v1, v2 = map(int, sys.stdin.readline().split())


def g(distance, visited):
    m = INF
    index = 0

    for i in range(1, V+1):
        if distance[i] < m and not visited[i]:
            m = distance[i]
            index = i

    return index

def f(s):
    visited = [False] * (V+1)
    distance = [INF] * (V+1)
    visited[s] = True
    distance[s] = 0

    for i in N[s]:
        v = i[0]
        w = i[1]
        if distance[v] > w:
            distance[v] = w


    for i in range(V-1):
        index = g(distance, visited)
        visited[index] = True
        for n in N[index]:
            v = n[0]
            w = n[1]
            if distance[v] > distance[index] + w:
                distance[v] = distance[index] + w
                
    return distance
    






one = f(1)
v1_ = f(v1)
v2_ = f(v2)

res1 = one[v1] + v1_[v2] + v2_[V]
res2 = one[v2] + v2_[v1] + v1_[V]
res = min(res1, res2)

print(res if res < INF else -1)
    


    

    

    







            
        


    
















            



    
