function solution(array, n) {
    let answer = 0;
    array.forEach((num) => num === n ? answer++ : answer);
    return answer;
}