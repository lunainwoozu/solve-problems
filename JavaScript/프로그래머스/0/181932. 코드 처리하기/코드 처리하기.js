function solution(code) {
    let ret = "";
    let mode = 0;
    for (let i = 0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = 1 - mode; // mode 전환
        } else if (i % 2 === mode) {
            ret += code[i];
        }
    }
    return ret ? ret : "EMPTY";
}