function solution(array, commands) {
    return commands.map(([from, to, k]) => 
        array.slice(from - 1, to).sort((x, y) => x - y)[k - 1]
    );
}

