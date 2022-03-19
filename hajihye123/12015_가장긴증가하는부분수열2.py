import sys

input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))
nums = [a[0]]


def binary_search(num):
    start = 0
    end = len(nums)-1

    while True:
        if start > end:
            break

        mid = (start + end) // 2
        if nums[mid] >= num:
            end = mid - 1
        else:
            start = mid + 1

    return start


for num in a:
    if num > nums[-1]:
        nums.append(num)
    else:
        i = binary_search(num)
        nums[i] = num

print(len(nums))