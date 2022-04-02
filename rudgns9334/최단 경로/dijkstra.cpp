#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int V, E, K;
int dis[20001];
vector<pair<int,int>> edge[20001];

void dijkstra(int K){
    int v = K;
    int cnt = 1;
    priority_queue<pair<int,int>> pq;
    pq.push(make_pair(0,K));
    dis[v] = 0;
    while(!pq.empty()){
        int cost = -pq.top().first;
        int next = pq.top().second;
        pq.pop();
        for(int i=0;i<edge[next].size();i++){
            int y = edge[next][i].first;
            int w = edge[next][i].second;
            if(dis[y] > cost+w) {
                dis[y] = cost+w;
                pq.push(make_pair(-dis[y],y));
            }
        }
    }

}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> V >> E;
    cin >> K;
    for(int i=0;i<E;i++){
        int a,b,c;
        cin >> a >> b >> c;
        edge[a].push_back(make_pair(b,c));
    }
    for(int i=1;i<=V;i++) dis[i] = 3000001;
    dijkstra(K);
    for(int i=1;i<=V;i++){
        int d = dis[i];
        if(dis[i]==3000001) cout << "INF" << "\n";
        else cout << d << "\n";
    }
}
