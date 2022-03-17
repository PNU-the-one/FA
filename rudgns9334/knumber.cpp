#include<iostream>
#include<algorithm>

using namespace std;

long long n, k;

int Knumber(int target){
    long long start, mid, end;
    int rst=0;
    start=1;
    end=target;
    while(end>=start){
        mid=(start+end)/2;
        int cnt=0;
        for(int i=1;i<=n;i++){
            cnt+=min(n,mid/i);
        }
        if(cnt>=target){
            end=mid-1;
            rst=mid;
        }
        else{
            start=mid+1;
        }
    }
    return rst;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    cin >> n >> k;
    cout << Knumber(k) << "\n";

}
