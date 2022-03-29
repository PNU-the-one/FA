#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>

using namespace std;

int n, m;
int cnt;
bool visited[101];
vector<int> edge[101];

void DFS(int x) {
    visited[x] = true;
    cnt++;
    for(int i=0;i<edge[x].size();i++){
        int y = edge[x][i];
        if(!visited[y]){
            DFS(y);
        }
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n >> m;
    for(int i=0;i<m;i++){
        int x, y;
        cin >> x >> y;
        edge[x].push_back(y);
        edge[y].push_back(x);
    }
    DFS(1);
    cout << cnt-1 << "\n";

}
