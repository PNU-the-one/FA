import sys

input = sys.stdin.readline
k, n = map(int, input().split())
lines = []

for i in range(k):
    lines.append(int(input()))

start, end = 1, max(lines)

while start <= end:
    mid = (start + end) // 2
    res = 0
    for i in range(k):
        res += lines[i] // mid

    if res >= n:
        start = mid + 1
    if res < n:
        end = mid - 1

print(end)