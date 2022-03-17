import sys

input = sys.stdin.readline
n = int(input())
k = int(input())

start, end = 1, k

while start <= end:
    mid = (start + end) // 2
    res = 0

    for i in range(1, n+1):
        res += min(mid // i, n)

    if res >= k:
        ans = mid
        end = mid - 1
    else:
        start = mid + 1

print(ans)

# (1,1) (1,2) (1,3)  1 2 3
# (2,1) (2,2) (2,3)  2 4 6
# (3,1) (3,2) (3,3)  3 6 9
# 각 행의 수는 모두 i의 배수-> i번째 행의 최댓값은 i*n
# k번째 수는 k보다 작거나 같다.
