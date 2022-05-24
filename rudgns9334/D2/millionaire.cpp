#include<iostream>
#include<vector>
 
using namespace std;
 
vector<int> price;
 
long long sale(int day) {
    int max_price;
    int n = day-1;
    long long sum = 0;
    while (n > 0) {
        max_price = price[n];
        int m = n - 1;
        while (m >= 0 && max_price > price[m]) {
            sum += max_price - price[m];
            m--;
        }
        if (m <= 0) {
            return sum;
        }
        else {
            n = m;
        }
    }
    return sum;
}
 
int main(int argc, char** argv)
{
    int test_case;
    int T, day;
   
    cin>>T;
    /*
       여러 개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
    */
    for(test_case = 1; test_case <= T; ++test_case)
    {
 
        cin >> day;
        long long cost = 0;
        for(int i=0;i<day;i++){
            int in;
            cin >> in;
            price.push_back(in);
        }
        cost = sale(day);
        cout << "#" << test_case << " " << cost << "\n";
        price.clear();
 
 
    }
    return 0;//정상종료시 반드시 0을 리턴해야합니다.
}