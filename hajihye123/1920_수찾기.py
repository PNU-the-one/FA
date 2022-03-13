import sys

input = sys.stdin.readline
n = int(input())
a = sorted(list(map(int, input().split())))
m = int(input())
nums = list(map(int, input().split()))


def binary_search(num, a, start, end):
    if start > end:
        return 0

    mid = (start + end) // 2
    if num == a[mid]:
        return 1
    if num > a[mid]:
        return binary_search(num, a, mid+1, end)
    if num < a[mid]:
        return binary_search(num, a, start, mid-1)


for i in range(m):
    print(binary_search(nums[i], a, 0, len(a)-1))