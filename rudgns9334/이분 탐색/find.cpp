#include<iostream>
#include<algorithm>

using namespace std;

int n,m;

int binarySearch(int start, int end, int target, int A[]){
    if(start>end) return 0;
    int mid = (start+end)/2;
    if(A[mid]==target) return 1;
    else if(A[mid]>target) return binarySearch(start,mid-1,target,A);
    else if(A[mid]<target) return binarySearch(mid+1,end,target,A);
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    int t;
    cin >> n;
    int A[n]={0,};
    for(int i=0;i<n;i++){
        cin >> A[i];
    }
    sort(A,A+n);
    cin >> m;
    for(int i=0;i<m;i++){
        cin >> t;
        cout << binarySearch(0,n-1,t,A) << "\n";
    }
}
