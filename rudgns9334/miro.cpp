#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int n, m;
string str;
bool visited[10001];
vector<int> miro[101];
vector<int> edge[10001];

int BFS(int x){
    queue<pair<int,int>> q;
    int cnt=1;
    q.push(make_pair(x,cnt));
    visited[x] = true;
    while(!q.empty()){
        int y = q.front().first;
        cnt = q.front().second;
        q.pop();
        if(y==n*m-1) return cnt;
        for(int i=0;i<edge[y].size();i++){
            int z = edge[y][i];
            if(!visited[z]){
                q.push(make_pair(z,cnt+1));
                visited[z] = true;
            }
        }
    }
}

void makeTree(int n, int m) {
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(miro[i][j]==1){
                if(i!=0 && miro[i-1][j]==1) edge[i*m+j].push_back((i-1)*m+j);
                if(i!=n-1 && miro[i+1][j]==1) edge[i*m+j].push_back((i+1)*m+j);
                if(j!=0 && miro[i][j-1]==1) edge[i*m+j].push_back(i*m+(j-1));
                if(j!=m-1 && miro[i][j+1]==1) edge[i*m+j].push_back(i*m+(j+1));
            }
        }
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n >> m;
    for(int i=0;i<n;i++){
        cin >> str;
        for(int j=0;j<m;j++){
            miro[i].push_back(str[j]-48);
        }
    }
    makeTree(n,m);
    cout << BFS(0) << "\n";

}
