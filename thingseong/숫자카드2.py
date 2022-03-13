import sys

N = int(sys.stdin.readline())

nums = sorted(map(int, sys.stdin.readline().split()))



M = int(sys.stdin.readline())

m = map(int, sys.stdin.readline().split())


def f(arr, m, s, e):
    if s > e:
        return 0

    mid = (s + e) // 2
    if arr[mid] == m:
        return arr[s:e+1].count(m)
    elif arr[mid] < m:
        return f(arr, m, mid+1, e)
    elif arr[mid] > m:
        return f(arr, m, 0, mid-1)

for x in m:
    print(f(nums, x, 0, len(nums)-1), end=" ")


    
    
'''
list slicing을 수행하면 시간복잡도가 상승 하는것 같다.
'''
