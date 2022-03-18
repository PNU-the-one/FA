import sys

N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))


s, e = 1, N
res = None
while s <= e:

    m = (s+e) // 2

    t = 0

    for i in range(0, N):
        t += min(m//i, N)

    if t >= k:
        res = m
        e = m - 1
    else:
        s = m + 1

print(res)
