function solution(n, m) {
    const getGCD = (a,b) => (b === 0 ? a : getGCD(b, a % b));
    const gcd = getGCD(n,m);
    const lcm = (n*m) / gcd;
    return [gcd, lcm]
}