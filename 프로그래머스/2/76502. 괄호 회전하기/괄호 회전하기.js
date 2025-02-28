function solution(s) {
    let count = 0;
    const isValid = (str) => {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };
        
        for (let char of str) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };
    
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) count++;
        s = s.slice(1) + s[0]; // 왼쪽으로 한 칸 회전
    }
    
    return count;
}
