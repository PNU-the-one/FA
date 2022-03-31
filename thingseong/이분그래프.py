import sys
from collections import deque

def bfs(s):
    N[s] = 1
    Q = deque([s])
   
    while Q:
        n = Q.popleft()

        for i in G[n]:
            if N[i] == 0:
                N[i] = -N[n]
                Q.append(i)
            else:
                if N[i] == N[n]:
                    return False


    return True

K = int(sys.stdin.readline())


for _ in range(K):
    V, E = map(int, sys.stdin.readline().split())
    N = [0] * (V+1)
    G = [[]for i in range(V+1)]
    check = True
    for _ in range(E):
        A, B = map(int, sys.stdin.readline().split())
        G[A].append(B)
        G[B].append(A)

    for v in range(1, V+1):
        if N[v] == 0:
            if bfs(v) == False:
                check = False
                break
    print("YES" if check else "NO")






            
        


    
















            



    
