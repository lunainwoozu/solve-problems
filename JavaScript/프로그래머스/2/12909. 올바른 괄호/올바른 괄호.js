function solution(s){
    let lr = 0;
    const tof = s.split("");
    for(const w of tof) {
        if (w === "(") lr++;
        if (w === ")") lr--;
        if (lr < 0) break;
    }
    return lr === 0 ? true : false;
}