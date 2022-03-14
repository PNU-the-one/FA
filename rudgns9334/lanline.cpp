#include<iostream>

using namespace std;

int k, n;
int line[10001];

int cutLine(int target, int maxy, int arr[]){
    long long start, mid, end;
    int rst=0;
    start=1;
    end=maxy;
    while(end>=start){
        mid=(start+end)/2;
        int cnt=0;
        for(int i=0;i<k;i++){
            cnt+=(arr[i]/mid);
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
    cin >> k >> n;
    for(int i=0;i<k;i++){
        cin >> line[i];
        if(line[i]>maxy) maxy = line[i];
    }
    cout << cutLine(n,maxy,line) << "\n";

}
