import sys
from collections import deque
N, K = map(int, sys.stdin.readline().split())


G = [0] * 200002
'''
X는 최대 몇까지 갈수있는가?
'''

D = [1, -1, 2]



def bfs(s):
    Q = deque(s)
    

    
    G[Q[0]] = 1
    
    while Q:
        
        X= Q.popleft()

        for d in D:

            if d != 2:
                nX = X + d
            else:
                nX = X * 2

            
            if nX < 0 or nX >= 200002:
                continue
            
            if G[nX] == 0:
                G[nX] = G[X] + 1
                Q.append(nX)
                
        

    return G[K] -1



print(bfs([N]))





            



    
