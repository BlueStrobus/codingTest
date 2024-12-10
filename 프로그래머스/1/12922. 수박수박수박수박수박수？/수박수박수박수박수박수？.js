function solution(n) {
    let wArr=[]
    //let wString=""
    for(let i=1; i<n+1; i++){
        if(i%2){// 홀
            wArr.push("수")
        }else{// 짝
            wArr.push("박")
        }
    }
    // wString = wArr.join("")
    // return wString
    return wArr.join("")
    
}