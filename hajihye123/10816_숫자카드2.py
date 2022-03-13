import sys

input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))
m = int(input())
nums = list(map(int, input().split()))
res = dict()

for i in range(n):
    if a[i] not in res:
        res[a[i]] = 1
    else:
        res[a[i]] += 1

for i in range(m):
    if nums[i] in res:
        print(res[nums[i]], end=' ')
    else:
        print(0, end=' ')