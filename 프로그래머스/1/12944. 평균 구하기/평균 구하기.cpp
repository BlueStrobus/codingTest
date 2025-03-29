#include <string>
#include <vector>

using namespace std;

double solution(vector<int> arr) {  
    double sum = 0;
    for (const auto& number : arr){ 
        sum += number;
    }
    return sum/arr.size();
}