#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>
#define INF 987654321

using namespace std;

int N,M;
int dis[501];
vector<pair<pair<int,int>,int>> edge;

void bellma_Ford(){
    dis[1] = 0;
    for(int i=1;i<=N-1;i++){
        for(int j=0;j<edge.size();j++){
            int start = edge[j].first.first;
            int end = edge[j].first.second;
            int cost = edge[j].second;
            if(dis[start] == INF) continue;
            if(dis[end] > dis[start] + cost) dis[end] = dis[start]+cost;
        }
    }
    for(int i=0;i<edge.size();i++){
        int start = edge[i].first.first;
        int end = edge[i].first.second;
        int cost = edge[i].second;
        
        if(dis[start]==INF) continue;
        if(dis[end] > dis[start]+cost){
            cout << -1 << "\n";
            return;
        }
    }
    for (int i = 2; i <= N; i++)
    {
        if (dis[i] == INF) cout << -1 << endl;
        else cout << dis[i] << endl;
    }

}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> N >> M;
    for(int i=1;i<=N;i++) dis[i] = INF;
    for(int i=0;i<M;i++){
        int a,b,c;
        edge.push_back(make_pair(make_pair(a,b),c));
    }
    bellma_Ford();
}
