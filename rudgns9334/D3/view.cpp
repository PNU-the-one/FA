#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

vector<int> building;

int view(int b) {
	int start = 2;
	int sum = 0;
	while (start < b - 2) {
		if (building[start - 2] < building[start] && building[start - 1] < building[start] && building[start + 1] < building[start] && building[start + 2] < building[start]) {
			sum += building[start] - max({ building[start - 2],building[start - 1], building[start + 1], building[start + 2] });
		}
		start++;
	}
	return sum;
}

int main(int argc, char** argv)
{
	int test_case;
	
	for(test_case = 1; test_case <= 10; ++test_case)
	{

		int num,a;
        cin >> num;
        for(int i=0;i<num;i++){
            cin >> a;
            building.push_back(a);
        }
        cout << "#" << test_case << " " << view(num) << "\n";
		building.clear();

	}
	return 0;
}