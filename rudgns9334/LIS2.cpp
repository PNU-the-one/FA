#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int n;

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n;
    int x;
    vector<int> v;
    vector<int>::iterator iter;
    for(int i=0;i<n;i++){
        cin >> x;
        if(v.empty() || v.back() < x){
            v.push_back(x);
        }
        else{
            iter = lower_bound(v.begin(), v.end(), x);
            *iter = x;
        }
    }
    cout << v.size() << "\n";

}
