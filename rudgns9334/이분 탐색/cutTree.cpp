#include<iostream>

using namespace std;

long long n, m;
int tree[1000001];

int cutTree(long long target, int maxy, int arr[]){
    long long start, mid, end;
    int rst=0;
    start=0;
    end=maxy;
    while(end>=start){
        mid=(start+end)/2;
        long long cnt=0;
        for(int i=0;i<n;i++){
            if(arr[i]>mid) cnt+=arr[i]-mid;
        }
        if(cnt<target){
            end=mid-1;
        }
        else{
            start=mid+1;
            if(rst<mid) rst=mid;
        }
    }
    return rst;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    int maxy=0;
    cin >> n >> m;
    for(int i=0;i<n;i++){
        cin >> tree[i];
        if(tree[i]>maxy) maxy = tree[i];
    }
    cout << cutTree(m,maxy,tree) << "\n";

}
