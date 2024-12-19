process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const p = data.split(" ");
    const n = Number(p[0]), m = Number(p[1]);

    console.log(('*'.repeat(n) + '\n').repeat(m).trim());
});