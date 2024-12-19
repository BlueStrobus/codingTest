process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const p = data.split(" ");
  //
  const n = Number(p[0]),
    m = Number(p[1]);

  let strN = "";
  for (let i = 0; i < n; i++) {
    strN = strN + "*";
  }
  for (let i = 0; i < m; i++) {
    console.log(strN);
  }

});
