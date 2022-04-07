#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<cstring>
#define INF 987654321

using namespace std;

int N,M;
int dis[101][101];


void Floyd(){
    for(int i=1;i<=N;i++){
        for(int j=1;j<=N;j++){
            for(int k=1;k<=N;k++){
                dis[j][k] = min(dis[j][k], dis[j][i]+dis[i][k]);
            }
        }
    }

}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> N >> M;
    for(int i=1;i<=N;i++){
        for(int j=1;j<=N;j++){
            if(i==j) dis[i][j] = 0;
            else dis[i][j] = INF;
        }
    }
    for(int i=0;i<M;i++){
        int s,e,c;
        cin >> s >> e >> c;
        if(dis[s][e]>c) dis[s][e] = c;
    }
    Floyd();
    for(int i=1;i<=N;i++){
        for(int j=1;j<=N;j++){
            if(dis[i][j]==INF) cout << 0 << " ";
            else cout << dis[i][j] << " ";
        }
        cout << "\n";
    }
}
