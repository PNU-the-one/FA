import sys

n = int(sys.stdin.readline())
A = list(map(int, sys.stdin.readline().split()))
x = int(sys.stdin.readline())
A = sorted(A)
cnt = 0

l, r = 0, n-1

while(l < r):
    if A[l] + A[r] == x:
        cnt += 1
        l = l + 1
    elif A[l] + A[r] < x:
        l = l + 1
    else:
        r = r - 1

print(cnt)
