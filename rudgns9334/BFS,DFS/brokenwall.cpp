#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int n, m;
string str;
bool visited[1001][1001][2];
int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};
vector<int> miro[1001];

int BFS(int x, int y){
    queue<pair<pair<int,int>,pair<int,int>>> q;
    int cnt=1;
    int brake=0;
    q.push(make_pair(make_pair(x,y),make_pair(cnt,brake)));
    visited[x][y][brake] = true;
    while(!q.empty()){
        int a = q.front().first.first;
        int b = q.front().first.second;
        cnt = q.front().second.first;
        brake = q.front().second.second;
        q.pop();
        if(a==n-1 && b==m-1) return cnt;
        for(int i=0;i<4;i++){
            int mx = a+dx[i];
            int my = b+dy[i];
            if(mx<0 || my<0 || mx>=n || my>=m) continue;
            if(!visited[mx][my][brake] && miro[mx][my]==0){
                q.push(make_pair(make_pair(mx,my),make_pair(cnt+1,brake)));
                visited[mx][my][brake] = true;
            }
            if(!visited[mx][my][brake] && miro[mx][my]==1 && brake==0){
                q.push(make_pair(make_pair(mx,my),make_pair(cnt+1,brake+1)));
                visited[mx][my][brake+1] = true;
            }
        }
    }
    return -1;
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
    cout << BFS(0,0) << "\n";

}
