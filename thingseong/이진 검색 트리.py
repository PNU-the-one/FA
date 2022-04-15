import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N = []
while True:
    try:
        k = int(input())
        N.append(k)
    except:
        break



def f(s, e):
    if s > e:
        return

    m = e + 1

    for i in range(s+1, e+1):
        if N[s] < N[i]:
            m = i
            break
    f(s+1, m-1)
    f(m, e)
    print(N[s])

f(0, len(N)-1)

    
