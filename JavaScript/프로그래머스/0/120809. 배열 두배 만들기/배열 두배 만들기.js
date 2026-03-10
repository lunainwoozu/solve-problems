function solution(numbers) {
    let answer = [];
    for (const n of numbers) {
        let i = n * 2;
        answer.push(i);
    }
    return answer;
}