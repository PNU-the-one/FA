#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>

using namespace std;

int n;
string str;
bool visited[626];
vector<int> edge[626];
vector<int> house[26];
vector<int> apart;

int DFS(int x) {
    int rst=1;
    visited[x] = true;
    for(int i=0;i<edge[x].size();i++){
        int y = edge[x][i];
        if(!visited[y]){
            rst += DFS(y);
        }
    }
    return rst;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n;
    for(int i=0;i<n;i++){
        cin >> str;
        for(int j=0;j<n;j++){
            house[i].push_back(str[j]-48);
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(house[i][j]==1){
                if(i!=0 && house[i-1][j]==1) edge[i*n+j].push_back((i-1)*n+j);
                if(j!=0 && house[i][j-1]==1) edge[i*n+j].push_back(i*n+(j-1));
                if(i!=n-1 && house[i+1][j]==1) edge[i*n+j].push_back((i+1)*n+j);
                if(j!=n-1 && house[i][j+1]==1) edge[i*n+j].push_back(i*n+(j+1));
            }
        }
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(!visited[i*n+j] && house[i][j]==1){
                apart.push_back(DFS(i*n+j));
            }
        }
    }
    sort(apart.begin(), apart.end());


    cout << apart.size() << "\n";
    for(int i=0;i<apart.size();i++){
        cout << apart[i] << "\n";
    }
}
