#include<iostream>
#include<algorithm>

using namespace std;

int n,m;

int lowerSearch(int target, int A[], int size){
    int start, mid, end;
    start = 0;
    end = size-1;

    while(end>start){
        mid = (start+end)/2;
        if(A[mid]>=target) {
            end=mid;
        }
        else start=mid+1;
    }
    return end;
}

int upperSearch(int target, int A[], int size){
    int start, mid, end;
    start = 0;
    end = size-1;
    while(end>start){
        mid = (start+end)/2;
        if(A[mid]>target) end = mid;
        else {
            start=mid+1;
        }
    }
    return end;
}

int main()
{
    cin.tie(NULL);
    cin.sync_with_stdio(false);
    int t;
    int L, U;
    cin >> n;
    int A[n]={0,};
    for(int i=0;i<n;i++){
        cin >> A[i];
    }
    sort(A,A+n);
    cin >> m;
    for(int i=0;i<m;i++){
        cin >> t;
        L = lowerSearch(t, A, n);
        U = upperSearch(t, A, n);
        if(U==n-1 && A[n-1]==t) U++;
        cout << U-L << " ";
    }
}
