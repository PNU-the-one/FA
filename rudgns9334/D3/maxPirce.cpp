#include <iostream>
#include <cstring>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int C;
vector<int> num;
int max_price;
int visit[1000000][11];

int VtoN() {
	int tmp = 0;
	for (int i = 0; i < num.size(); i++) {
		tmp += (num[i] * pow(10, num.size() - i - 1));
	}
	return tmp;
}

void Swap(int s, int e) {
	int start = num[s];
	int end = num[e];
	num[s] = end;
	num[e] = start;
}

void dfs(int n) {
	if (n >= C) {
		max_price = max(max_price, VtoN());
		return;
	}
	if (visit[VtoN()][n]) return;
	visit[VtoN()][n] = 1;

	for (int i = 0; i < num.size(); i++) {
		for (int j = i + 1; j < num.size(); j++) {
			Swap(i, j);
			dfs(n + 1);
			Swap(i, j);
		}
	}
}

int main() {
	cin.tie(NULL);
	cin.sync_with_stdio(false);
	int T;
	cin >> T;
	for (int test = 1; test <= T; test++) {
		string number;
		cin >> number >> C;
		for (int i = 0; i < number.size(); i++) {
			num.push_back(number[i] - '0');
		}
		dfs(0);
		cout << "#" << test << " " << max_price << "\n";
		max_price = 0;
		num.clear();
        memset(visit,0,sizeof(visit));
	}
	return 0;
}