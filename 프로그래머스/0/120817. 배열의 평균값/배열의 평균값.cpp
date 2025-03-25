#include <vector>
#include <numeric>
#include <cmath>
using namespace std;

double solution(vector<int> numbers) {
    if (numbers.empty()) return 0.0;
    double result = accumulate(numbers.begin(), numbers.end(), 0.0) / numbers.size();
    return round(result * 2) / 2; // 소수점 첫째 자리에서 반올림
}
