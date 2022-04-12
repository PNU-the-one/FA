import sys
from collections import deque


V = int(sys.stdin.readline())
G = [[] for _ in range(V+1)]

for i in range(1, V+1):
    line = list(map(int, sys.stdin.readline().split()))
    
    for j in range(1, len(line) - 2, 2):
        c = line[0]
        G[c].append((line[j], line[j+1]))

def bfs(s):
    Q = deque()
    visited = [-1] * (V+1)
    Q.append((s,0))
    visited[s] = 0
    M = [s, 0]
    
    while Q:
        N, W = Q.popleft()
        visited[N] = W

        for n, w in G[N]:
            if visited[n] == -1:
                Q.append((n, w+W))
                if M[1] < w+W:
                    M = [n, w+W]
                
    return M
        
      

res = bfs(1)
tmp = bfs(res[0])
print(tmp[1])
            
    
