#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int t, l, sx, sy, ex, ey;
int dx[8] = {1, 2, 2, 1, -1, -2, -2, -1};
int dy[8] = {-2, -1, 1, 2, 2, 1, -1, -2};
vector<int> miro[1001];

int BFS(int x, int y){
    queue<pair<pair<int,int>,int>> q;
    bool visited[301][301] = {false};
    int cnt=0;
    q.push(make_pair(make_pair(x,y),cnt));
    visited[x][y] = true;
    while(!q.empty()){
        int a = q.front().first.first;
        int b = q.front().first.second;
        cnt = q.front().second;
        q.pop();
        if(a==ex && b==ey) return cnt;
        for(int i=0;i<8;i++){
            int mx = a+dx[i];
            int my = b+dy[i];
            if(mx<0 || my<0 || mx>=l || my>=l) continue;
            if(!visited[mx][my]){
                q.push(make_pair(make_pair(mx,my),cnt+1));
                visited[mx][my] = true;
            }
        }
    }
    return -1;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> t;
    for(int i=0;i<t;i++){
        cin >> l;
        cin >> sx >> sy;
        cin >> ex >> ey;
        cout << BFS(sx, sy) <<"\n";
    }
}
