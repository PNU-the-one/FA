#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>

using namespace std;

int n, m, v;
bool visited[1001];
bool visited2[1001];
vector<int> edge[1001];

void DFS(int x) {
    visited[x] = true;
    cout << x << " ";
    sort(edge[x].begin(),  edge[x].end());
    for(int i=0;i<edge[x].size();i++){
        int y = edge[x][i];
        if(!visited[y]){
            DFS(y);
        }
    }
}

void BFS(int x){
    queue<int> q;
    q.push(x);
    visited2[x] = true;
    cout << x << " ";
    sort(edge[x].begin(),  edge[x].end());
    while(!q.empty()){
        int y = q.front();
        q.pop();
        for(int i=0;i<edge[y].size();i++){
            int z = edge[y][i];
            if(!visited2[z]){
                q.push(z);
                visited2[z] = true;
                cout << z << " ";
            }
        }
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n >> m >> v;
    for(int i=0;i<m;i++){
        int x, y;
        cin >> x >> y;
        edge[x].push_back(y);
        edge[y].push_back(x);
    }
    DFS(v);
    cout << "\n";
    BFS(v);

}
