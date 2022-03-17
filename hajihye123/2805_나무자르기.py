import sys

input = sys.stdin.readline
n, m = map(int, input().split())
tree = list(map(int, input().split()))

start, end = 1, max(tree)

while start <= end:
    mid = (start + end) // 2
    res = 0

    for i in range(n):
        if tree[i] >= mid:
            res += (tree[i] - mid)

    if res >= m:
        start = mid + 1
    else:
        end = mid - 1

print(end)