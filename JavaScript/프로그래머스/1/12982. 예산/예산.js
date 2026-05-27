function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a - b);
    for(const i of d) {
        if (budget < i) break;
        budget -= i;
        answer++;
    }
    return answer;
}