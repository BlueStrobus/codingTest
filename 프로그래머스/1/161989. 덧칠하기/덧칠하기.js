const solution = (n, m, section) => {
    let [count, end] = [0, 0];
    for (let num of section) {
        if (end < num) {
            end = num + m - 1;
            count++;
        }
    }
    return count;
};