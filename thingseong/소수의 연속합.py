import sys
import math

N = int(sys.stdin.readline())


def p(n):
    for i in range(2, int(math.sqrt(n) + 1)):
        if n % i == 0:
            return False
    return True

P = []

for i in range(2, N+1):
    if p(i):
        P.append(i)



i, j = 0, 0

res = 0
s = 0
while(1):
    if s == N:
        s -= P[i]
        res += 1
        i = i + 1
    elif s > N:
        s -= P[i]
        i = i + 1
    elif j == len(P):
        break
    else:
        s += P[j]
        j = j + 1
print(res)


