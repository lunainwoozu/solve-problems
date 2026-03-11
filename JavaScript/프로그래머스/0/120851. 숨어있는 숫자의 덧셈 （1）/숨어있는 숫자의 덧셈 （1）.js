function solution(my_string) {
    let num = [...my_string].filter(char => /\d/.test(char));
    let answer = 0;
    for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        answer += n;
    }
    return answer;
}