import sys

K, N = map(int, sys.stdin.readline().split())

lan = []
for _ in range(K):
    lan.append(int(sys.stdin.readline()))


s = 1
e = max(lan)


'''
min이 안되는 이유

2 10
1000
1

1로는 1000개 나옴
'''

while s <= e:
    m = (s + e) // 2
    lines = 0

    for l in lan:
        lines += l // m


    if lines >= N:
        s = m + 1
    else:
        e = m - 1
print(e)
        
