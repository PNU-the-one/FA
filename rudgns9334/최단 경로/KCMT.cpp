#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>
#define INF 987654321

using namespace std;

int T,N,M,K;
int dp[101][10001],ans;
vector<pair<int,pair<int,int>>> edge[101];

void dijkstra(int s){
    for(int i=0;i<101;i++){
        for(int j=0;j<10001;j++){
            dp[i][j] = INF;
        }
    }
    priority_queue<pair<int,pair<int,int>>> pq;
    pq.push(make_pair(0,make_pair(0,s)));
    dp[s][0] = 0;
    while(!pq.empty()){
        int time = -pq.top().first;
        int cost = pq.top().second.first;
        int city = pq.top().second.second;
        pq.pop();
        for(int i=0;i<edge[city].size();i++){
            int y = edge[city][i].first;
            int ti = edge[city][i].second.second;
            int co = edge[city][i].second.first;
            if(cost+co > M) continue;
            if(dp[y][cost+co] <= time+ti) continue;
            for(int j=cost+co;j<=M;j++){
                if(dp[y][j]>time+ti){
                    dp[y][j] = time+ti;
                }
            }
            pq.push(make_pair(-(time+ti),make_pair(cost+co,y)));
        }
    }

}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> T;
    for(int i=0;i<T;i++){
        cin >> N >> M >> K;
        for(int j=0;j<K;j++){
            int u,v,c,d;
            cin >> u >> v >> c >> d;
            edge[u].push_back(make_pair(v,make_pair(c,d)));

        }
        dijkstra(1);
        ans = INF;
        for(int j=0;j<=M;j++){
            ans = min(ans,dp[N][j]);
        }
        if(ans == INF) cout << "Poor KCM" << "\n";
        else cout << ans << "\n";
        for(int j=0;j<101;j++){
            edge[j].clear();
        }
    }

}
