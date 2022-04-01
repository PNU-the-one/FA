#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int V, E, K;
int dis[20001];
vector<pair<int,int>> edge[20001];
bool visited[20001];

void dijkstra(int K){
    int v = K;
    int cnt = 1;
    queue<int> q;
    q.push(v);
    visited[v] = true;
    dis[v] = 0;
    while(!q.empty()){
        int x = q.front();
        int low = 0;
        q.pop();
        for(int i=0;i<edge[x].size();i++){
            int y = edge[x][i].first;
            int w = edge[x][i].second;
            if(!visited[y]){
                if(dis[y]==0) dis[y] = w;
                else if(dis[y] > dis[x]+w) dis[y] = dis[x]+w;
                if(dis[low]>dis[y]) low = y;
            }
        }
        q.push(low);
        visited[low] = true;
    }

}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> V >> E;
    cin >> K;
    dis[0] = 3000001;
    for(int i=0;i<E;i++){
        int a,b,c;
        cin >> a >> b >> c;
        edge[a].push_back(make_pair(b,c));
    }
    dijkstra(K);
    for(int i=1;i<=V;i++){
        cout << dis[i] << "\n";
    }
}
