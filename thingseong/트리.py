import sys
from collections import deque

input = sys.stdin.readline
case = 1
res = 0

def f(n, p): #싸이클이 있는가?
    visited[n] = 1
    for i in G[n]:
        if i == p:
            continue
        if visited[i] == 1:
            return False
        
        if not f(i, n):
            return False
        
    return True
    
            

while True:
    
    N, M = map(int, input().split())
    if N == 0 and M == 0 :
        break
    G = [[] for _ in range(N+1)]
    for _ in range(M):
        a, b = map(int, input().split())
        G[a].append(b)
        G[b].append(a)

    res = 0
    visited = [0] * (N+1)
    for i in range(1, N+1):
        if visited[i] == 1:
            continue
        check = f(i, 0)
        if check:
            res +=1


    

    
                    
    



    if res == 0:
        print("Case {}: No trees.".format(case))
    elif res == 1:
        print("Case {}: There is one tree.".format(case))
    else:
        print("Case {}: A forest of {} trees.".format(case, res))
    case += 1

    
        
