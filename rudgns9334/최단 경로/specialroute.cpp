#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int V, E, v1, v2;
int dis[20001];
bool C1no = false;
bool C2no = false;
vector<pair<int,int>> edge[20001];

int dijkstra(int s, int e){
    int v = s;
    int cnt = 1;
    priority_queue<pair<int,int>> pq;
    pq.push(make_pair(0,v));
    dis[v] = 0;
    while(!pq.empty()){
        int cost = -pq.top().first;
        int vertex = pq.top().second;
        pq.pop();
        if(vertex==e) return cost;
        for(int i=0;i<edge[vertex].size();i++){
            int y = edge[vertex][i].first;
            int w = edge[vertex][i].second;
            if(dis[y] > cost+w) {
                dis[y] = cost+w;
                pq.push(make_pair(-dis[y],y));
            }
        }
    }
    return -1;
}

int findroute(int v1, int v2){
    int c1 = dijkstra(1,v1);
    if(c1== -1) return 0;
    for(int i=1;i<=V;i++){
        if(dis[i]!=2147483647) dis[i]=2147483647;
    }
    int c2 = dijkstra(v1,v2);
    if(c2== -1) return 0;
    for(int i=1;i<=V;i++){
        if(dis[i]!=2147483647) dis[i]=2147483647;
    }
    int c3 = dijkstra(v2,V);
    if(c3== -1) return 0;
    for(int i=1;i<=V;i++){
        if(dis[i]!=2147483647) dis[i]=2147483647;
    }
    return c1+c2+c3;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> V >> E;
    int case1 = 0;
    int case2 = 0;
    for(int i=0;i<E;i++){
        int a,b,c;
        cin >> a >> b >> c;
        edge[a].push_back(make_pair(b,c));
        edge[b].push_back(make_pair(a,c));
    }
    cin >> v1 >> v2;
    for(int i=1;i<=V;i++) dis[i] = 2147483647;
    case1 = findroute(v1,v2);
    case2 = findroute(v2,v1);
    if(case1==0 && case2!=0) cout << case2 << "\n";
    else if(case2==0 && case1!=0) cout << case1 << "\n";
    else if(case1==0 && case2==0) cout << -1 << "\n";
    else cout << min(case1,case2) << "\n";
}
