function solution(n) {
    const rep = "수박".repeat(Math.ceil(n / 2));
    return n % 2 === 0 ? rep : rep.slice(0, -1);
}