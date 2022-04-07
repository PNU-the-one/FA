import sys

N, S = map(int, sys.stdin.readline().split())
num = list(map(int, sys.stdin.readline().split()))

i, j = 0, 0
s = 0
res = int(1e9)

while 1 :
    if s >= S:
        res = min(res, j - i)
        s -= num[i]
        i +=1

    elif j == N:
        break
    else:
        s += num[j]
        j +=1
if res == int(1e9):
    print(0)
else:
    print(res)
