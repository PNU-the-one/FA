import sys

input = sys.stdin.readline

N = int(input())

T = [[] for _ in range(N)]

for _ in range(N):
    r, a, b = input().split()
    i = ord(r) - 65
    T[i].append((r, a, b))

def f0(root):
    if root == '.':
        return
    r = ord(root) - 65
    
    print(T[r][0][0], end="")
    f0(T[r][0][1])
    f0(T[r][0][2])
    
def f1(root):
    if root == '.':
        return
    r = ord(root) - 65
    
    f1(T[r][0][1])
    print(T[r][0][0], end="")
    f1(T[r][0][2])
    
def f2(root):
    if root == '.':
        return
    r = ord(root) - 65
    
    f2(T[r][0][1])
    f2(T[r][0][2])
    print(T[r][0][0], end="")


f0('A')
print()
f1('A')
print()
f2('A')
    
    
