import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

G = [[0 for _ in range(N)] for _ in range(N)]

for _ in range(M):
    A, B = map(int, sys.stdin.readline().split())
    G[A-1][B-1] = 1
    G[B-1][A-1] = 1



def dfs(s,visited = []):
    visited.append(s)

    for i in range(1, N+1):
        if G[s-1][i-1] != 1:
            continue
        if i not in visited:
            dfs(i, visited)
    return visited


def bfs(s):
    visited = [s]
    Q = [s]
    while Q:

        node = Q[0]
        del Q[0]

        for i in range(1, N+1):
            if G[node-1][i-1] != 1:
                continue
            if i not in visited:
                Q.append(i)
                visited.append(i)
    return visited
            


print(len(dfs(1))-1)



    
