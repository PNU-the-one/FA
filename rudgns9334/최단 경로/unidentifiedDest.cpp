#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int T,n,m,t,s,g,h;
int dis[2001];
vector<pair<int,int>> edge[2001];

void dijkstra(int s){
    for(int i=0;i<2001;i++){
        dis[i]=50000001;
    }
    int v = s;
    priority_queue<pair<int,int>> pq;
    pq.push(make_pair(0,v));
    dis[v] = 0;
    while(!pq.empty()){
        int cost = -pq.top().first;
        int vertex = pq.top().second;
        pq.pop();
        for(int i=0;i<edge[vertex].size();i++){
            int y = edge[vertex][i].first;
            int w = edge[vertex][i].second;
            if(dis[y] > cost+w) {
                dis[y] = cost+w;
                pq.push(make_pair(-dis[y],y));
            }
        }
    }
}

int findroute(int s, int v1, int v2, int e){
    dijkstra(s);
    int c1 = dis[v1];
    int c2 = dis[v2];
    int c3;
    for(int i=0;i<edge[g].size();i++){
        if(edge[g][i].first == h){
            c3 = edge[g][i].second;
        }
    }
    dijkstra(v1);
    int c4 = dis[e];
    dijkstra(v2);
    int c5 = dis[e];
    return min(c1+c3+c5,c2+c3+c4);
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> T;
    for(int j=0;j<T;j++){
        cin >> n >> m >> t;
        cin >> s >> g >> h;
        for(int i=0;i<m;i++){
            int a,b,d;
            cin >> a >> b >> d;
            edge[a].push_back(make_pair(b,d));
            edge[b].push_back(make_pair(a,d));
        }
        vector<int> res;
        for(int i=0;i<t;i++){
            int e;
            cin >> e;
            int case1 = findroute(s,g,h,e);
            dijkstra(s);
            int case2 = dis[e];
            if(case1==case2){
                res.push_back(e);
            }
        }
        sort(res.begin(), res.end());
        for(int i=0;i<res.size();i++){
            cout << res[i] << " ";
        }
        cout << "\n";
        for(int i=0;i<2001;i++){
            edge[i].clear();
        }
    }
}
