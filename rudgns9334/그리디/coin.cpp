#include<iostream>
#include<vector>

using namespace std;

int N,K;
vector<int> v;


int greedy(){
    int cnt=0;
    int k = K;
    for(int i=N-1;i>=0;i--){
        cnt += k/v[i];
        k = k%v[i];
    }
    return cnt;
}


int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> N >> K;
    int in;
    for(int i=1;i<=N;i++){
        cin >> in;
        v.push_back(in);
    }
    cout << greedy() << "\n";

}
