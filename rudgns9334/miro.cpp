#include<iostream>
#include<vector>
#include<algorithm>
#include<cstring>

using namespace std;

int n, m;
string str;
bool visited[10001];
vector<int> miro[101];
vector<int> edge[10001];

void BFS(int x){
    queue<int> q;
    q.push(x);
    visited[x] = true;
    while(!q.empty()){
        int y = q.front();
        q.pop();
        for(int i=0;i<edge[y].size();i++){
            int z = edge[y][i];
            if(!visited[z]){
                q.push(z);
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
                if(j!=0 && miro[i][j-1]==1) edge[i*m+j].push_back(i*m+(j-1));
                if(i!=n-1 && miro[i+1][j]==1) edge[i*m+j].push_back((i+1)*m+j);
                if(j!=m-1 && miro[i][j+1]==1) edge[i*m+j].push_back(i*m+(j+1));
            }
        }
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n, m;
    for(int i=0;i<n;i++){
        cin >> str;
        for(int j=0;j<m;j++){
            miro[i].push_back(str[j]);
        }
    }
    makeTree(n,m);


}
