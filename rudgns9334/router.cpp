#include<iostream>
#include<algorithm>

using namespace std;

int n, c;
int house[200001];

int Router(int target, int arr[]){
    long long start, mid, end;
    int rst=0;
    start=1;
    end=arr[n-1]-arr[0];
    while(end>=start){
        mid=(start+end)/2;
        int cnt=1;
        int prev = arr[0];
        for(int i=0;i<n;i++){
            if(arr[i]-prev>=mid) {
                cnt++;
                prev = house[i];
            }
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
    cin >> n >> c;
    for(int i=0;i<n;i++){
        cin >> house[i];
    }
    sort(house, house+n);
    cout << Router(c,house) << "\n";

}
