#include <vector>
using namespace std;

// 최대공약수(GCD) 계산 - 유클리드 호제법 사용
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM) 계산
int lcm(int a, int b) {
    return a * (b / gcd(a, b));
}

vector<int> solution(int n, int m) {
    int g = gcd(n, m);
    int l = lcm(n, m);
    return {g, l};
}
