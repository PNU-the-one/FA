import sys

N = int(sys.stdin.readline())
nums = [*map(int, input().split())]

stack = [nums[0]]



def f(v):
    s = 0
    e = len(stack) - 1

    while s<=e:
        m = (s+e) // 2

        if stack[m] == v:
            return m
        elif stack[m] < v:
            s = m + 1
        else:
            e = m - 1


for n in nums:
    if stack[-1] < n:
        stack.append(n)
    else:
        i = f(n)
        stack[i] = n
        
print(len(stack)-1)


