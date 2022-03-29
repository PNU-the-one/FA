#include<iostream>
#include<vector>
#include<algorithm>
#include<cstring>

using namespace std;

int t, n, m, k, a, b;
int cnt;
bool visited[2501];
int cabbage[51][51];
vector<int> edge[2501]; // 하.. 내 1시간..

void DFS(int x) {
    visited[x] = true;
    for(int i=0;i<edge[x].size();i++){
        int y = edge[x][i];
        if(!visited[y]){
            DFS(y);
        }
    }
}

void makeTree(int n, int m) {
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(cabbage[i][j]==1){
                if(i!=0 && cabbage[i-1][j]==1) edge[i*m+j].push_back((i-1)*m+j);
                if(j!=0 && cabbage[i][j-1]==1) edge[i*m+j].push_back(i*m+(j-1));
                if(i!=n-1 && cabbage[i+1][j]==1) edge[i*m+j].push_back((i+1)*m+j);
                if(j!=m-1 && cabbage[i][j+1]==1) edge[i*m+j].push_back(i*m+(j+1));
            }
        }
    }
}

void clearTree() {
    cnt = 0;
    memset(visited,false,sizeof(visited));
    memset(cabbage,0,sizeof(cabbage));
    for(int i=0;i<2501;i++){
        edge[i].clear();
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> t;
    for(int i=0;i<t;i++){
        clearTree();
        cin >> n >> m >> k;
        for(int j=0;j<k;j++){
            cin >> a >> b;
            cabbage[a][b] = 1;
        }
        makeTree(n,m);
        for(int j=0;j<n;j++){
            for(int l=0;l<m;l++){
                if(!visited[j*m+l] && cabbage[j][l]==1){
                    DFS(j*m+l);
                    cnt++;
                }
            }
        }
        cout << cnt << "\n";
    }

}
