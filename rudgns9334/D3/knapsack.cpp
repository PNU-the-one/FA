
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

int n, k;
int arr[101][2];
int dp[101][1001];

int main()
{
	int test_case;
	int T;
	cin >> T;
	for (test_case = 1; test_case <= T; ++test_case)
	{

		cin >> n >> k;
		for (int i = 1; i <= n; i++) {
			cin >> arr[i][0] >> arr[i][1];
		}
		for (int i = 1; i <= n; i++) {
			for (int j = 0; j <= k; j++) {
				if (arr[i][0] > j) {
					dp[i][j] = dp[i - 1][j];
				}
				else {
					dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - arr[i][0]] + arr[i][1]);
				}
			}
		}
		cout << "#" << test_case << " " << dp[n][k] << "\n";
		memset(arr, 0, sizeof(arr));
	}
}


