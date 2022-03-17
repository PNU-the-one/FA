import sys

N = int(sys.stdin.readline())
k = int(sys.stdin.readline())

s, e = 1, k
res = None
while s <= e:

    m = (s+e) // 2

    t = 0

    for i in range(1, N+1):
        t += min(m//i, N)

    if t >= k:
        res = m
        e = m - 1
    else:
        s = m + 1

print(res)
