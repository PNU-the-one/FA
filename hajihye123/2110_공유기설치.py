import sys

input = sys.stdin.readline
n, c = map(int, input().split())
x = []
for i in range(n):
    x.append(int(input()))
x.sort()

start, end = 1, x[-1] - x[0]

while start <= end:
    mid = (start + end) // 2
    res = 1
    current = x[0]

    for i in range(1, n):
        if current + mid <= x[i]:
            res += 1
            current = x[i]

    if res >= c:
        start = mid + 1
    else:
        end = mid - 1

print(end)