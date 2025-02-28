function solution(s) {
    const isValid = (str) => {
        const stack = [];
        for (let c of str) {
            if ('({['.includes(c)) stack.push(c);
            else if (stack.pop() !== {')':'(', ']':'[', '}':'{'}[c]) return false;
        }
        return !stack.length;
    };
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) count++;
        s = s.slice(1) + s[0];
    }
    return count;
}