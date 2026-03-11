function solution(str, n) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < n; j++) {
            answer += str[i];
        }
    }
    return answer;
}