import sys

N, C = map(int, sys.stdin.readline().split())

G = list(map(int, sys.stdin.readline().split()))

G1 = G[:N//2]
G2 = G[N//2:]

S1 = []
S2 = []

def calc(g, sumarr, i, w):
    n = len(g)
    if i >= n:
        sumarr.append(w)
        return
    calc(g, sumarr, i+1, w)
    calc(g, sumarr, i+1, w + g[i])
    
def bsearch(arr, target): ##인덱스를 반환
    s = 0
    e = len(arr)
    while s < e:
        m = (s + e) // 2
        if arr[m] <= target:
            s = m + 1
        else:
            e = m
    return e



calc(G1, S1, 0, 0)
calc(G2, S2, 0, 0)
S2 = sorted(S2)

print(S1)
print(S2)

cnt = 0
for i in S1:
    if C - i < 0:
        continue
    print(bsearch(S2, C-i))
    cnt += bsearch(S2, C-i) ##인덱스를 반환하면서 0~i번째 까지는 모두 가능하다.
print(cnt)

    
        
