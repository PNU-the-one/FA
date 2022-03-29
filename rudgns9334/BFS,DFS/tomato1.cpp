#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int n, m, t;
int cnt;
bool visited[1000001];
vector<int> tomato[1001];
vector<int> edge[1000001];
queue<int> start;

int BFS(){
    queue<pair<int,int>> q;
    int c=0;
    int v=0;
    while(!start.empty()){
        int x = start.front();
        start.pop();
        q.push(make_pair(x,c));
        v++;
        visited[x] = true;
    }
    while(!q.empty()){
        int y = q.front().first;
        c = q.front().second;
        q.pop();
        for(int i=0;i<edge[y].size();i++){
            int z = edge[y][i];
            if(!visited[z]){
                q.push(make_pair(z,c+1));
                v++;
                visited[z] = true;
            }
        }
    }
    if(v!=cnt) return -1;
    return c;
}

void makeTree(){
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(tomato[i][j]!=-1){
                if(j!=0 && tomato[i][j-1]!=-1){
                    edge[i*m+j].push_back(i*m+(j-1));
                }
                if(j!=m-1 && tomato[i][j+1]!=-1){
                    edge[i*m+j].push_back(i*m+(j+1));
                }
                if(i!=0 && tomato[i-1][j]!=-1){
                    edge[i*m+j].push_back((i-1)*m+j);
                }
                if(i!=n-1 && tomato[i+1][j]!=-1){
                    edge[i*m+j].push_back((i+1)*m+j);
                }
            }
        }
    }
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> m >> n;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin >> t;
            tomato[i].push_back(t);
            if(t!=-1){
                cnt++;
            }
            if(t==1){
                start.push(i*m+j);
            }
        }
    }
    makeTree();
    cout << BFS() << "\n";

}
