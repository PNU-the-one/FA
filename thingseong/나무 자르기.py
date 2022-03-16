import sys

N, M = map(int, sys.stdin.readline().split())

tree = list(map(int, sys.stdin.readline().split()))


s = 1
e = max(tree)




while s <= e:
    m = (s + e) // 2
    length = 0

    for t in tree:
        length += t - m if t-m > 0 else 0


    if length >= M:
        s = m + 1
    else:
        e = m - 1
print(e)
        
