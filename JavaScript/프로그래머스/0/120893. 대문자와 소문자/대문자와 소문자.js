function solution(my_string) {
    let answer = '';
    for (const str of my_string) {
        answer += str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
    }
    return answer;
}