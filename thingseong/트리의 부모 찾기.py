import sys
sys.setrecursionlimit(10**9)
N = int(sys.stdin.readline())
G = [ [] for _ in range(N+1)]

while(1):
    try:
        a, b = map(int, sys.stdin.readline().split())
        G[a].append(b)
        G[b].append(a)
    except:
        break


res = [0] * (N + 1)

def f(s):
    for e in G[s]:
        if res[e] == 0:
            res[e] = s
            f(e)

f(1)

for i in res[2:]:
    print(i)
