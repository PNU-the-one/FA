import sys

n = int(sys.stdin.readline())
A = list(map(int, sys.stdin.readline().split()))
A = sorted(A)

l, r = 0, n-1
m = None
res = None

while(l < r):
    tmp = abs(A[l] + A[r])
    if m == None:
        m = tmp
        res = (A[l], A[r])
    elif tmp < m:
        m = tmp
        res = (A[l], A[r])
        

    if A[l] + A[r] == 0:
        res = (A[l], A[r])
        break
    elif A[l] + A[r] < 0:
        l = l + 1
    elif A[l] + A[r] > 0:
        r = r - 1


print(res[0], res[1])
