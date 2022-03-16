import sys

N, C= map(int, sys.stdin.readline().split())

X = []
for _ in range(N):
    X.append(int(sys.stdin.readline()))

X = sorted(X)

s = 1
e = X[-1] - X[0]

res = None
while s <= e:
    m = (s + e) // 2

    current = X[0]
    cnt = 1

    for i in range(1, len(X)):
        if X[i] >= current + m:
            cnt += 1
            current = X[i]

    if cnt >= C:
        s = m + 1
        res = m
    else:
        e = m - 1

print(res)


'''
1 2 4 8 9 일 때

거리(답)가 1에서 최대 8까지 가능하다.
그중에서 뭐가 맞는지 이분탐색 하는게 이문제의 목적이다.

그래서 1과 8의 중간인 4 부터 시작해서
4로 했더니 공유기가 너무 적게 설치 되면
1~4 범위 내에 정답이 있다는 소리.
그 범위 내에서 다시 이분탐색을 하면 된다.
'''

        
