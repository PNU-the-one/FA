#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int t, V, E, u, v;
bool visited[20001];
bool color[20001];
vector<int> vertex[20001];
bool bioGraph=true;

int BFS(int x){
    queue<int> q;
    int cnt=0;
    q.push(x);
    visited[x] = true;
    color[x] = true;
    while(!q.empty()){
        int a = q.front();
        q.pop();
        for(int i=0;i<vertex[a].size();i++){
            int b = vertex[a][i];
            if(!visited[b]){
                q.push(b);
                visited[b] = true;
                color[b] = !color[a];
            }
            else{
                if(color[a]==color[b]) return bioGraph=false;
            }
        }
    }
    return bioGraph=true;
}

void clearVector(){
    memset(visited,false,sizeof(visited));
    memset(color,false,sizeof(color));
    bioGraph = true;
    for(int i=0;i<=20001;i++){
        vertex[i].clear();
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> t;
    for(int i=0;i<t;i++){
        cin >> V >> E;
        for(int j=0;j<E;j++){
            cin >> u >> v;
            vertex[u].push_back(v);
            vertex[v].push_back(u);
        }

        for(int j=1;j<=V;j++){
            if(!visited[j] && bioGraph) BFS(j);
        }

        if(bioGraph) cout << "YES" << "\n";
        else cout << "NO" << "\n";
        clearVector();
    }
}
