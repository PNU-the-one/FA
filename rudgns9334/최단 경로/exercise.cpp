#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>
#define INF 987654321

using namespace std;

int V,E;
int dp[401][401];




int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> V >> E;
    for(int i=1;i<=V;i++){
        for(int j=1;j<=V;j++){
            dp[i][j] = INF;
        }
    }
    for(int i=0;i<E;i++){
        int a,b,c;
        cin >> a >> b >> c;
        dp[a][b]=c;
    }
    
    for(int i=1;i<=V;i++){
        for(int j=1;j<=V;j++){
            for(int k=1;k<=V;k++){
                if(dp[j][k] > dp[j][i] + dp[i][k]) dp[j][k] = dp[j][i] + dp[i][k];
            }
        }
    }
    int ans = INF;
    for(int i=1;i<=V;i++){
        ans = min(ans,dp[i][i]);
    }
    if(ans==INF) cout << -1 << "\n";
    else cout << ans << "\n";

}
