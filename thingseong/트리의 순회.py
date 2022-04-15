import sys
input = sys.stdin.readline

N = int(input())

inoder = list(map(int, input().split())) ## 중앙에 루트 (중위)
postoder = list(map(int, input().split())) ## 뒤에 루트 (후위)


