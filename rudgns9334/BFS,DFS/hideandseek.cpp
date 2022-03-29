#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>

using namespace std;

int n, k;
bool visited[100001];

int BFS(int n, int k){
    queue<pair<int,int>> q;
    int cnt=0;
    q.push(make_pair(n,cnt));
    visited[n] = true;

    while(!q.empty()){
        int y = q.front().first;
        cnt = q.front().second;
        q.pop();
        if(y==k) return cnt;
        for(int i=0;i<3;i++){
            int z;
            if(i==0) z = y-1;
            if(i==1) z = y+1;
            if(i==2) z = 2*y;
            if(z>100000 || z<0) continue;
            if(!visited[z]){
                q.push(make_pair(z,cnt+1));
                visited[z]=true;
            }
        }
    }
    return cnt;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n >> k;

    cout << BFS(n,k) << "\n";

}
