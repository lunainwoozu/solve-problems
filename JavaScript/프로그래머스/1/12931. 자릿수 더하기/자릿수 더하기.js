function solution(n){
    return String(n).split('').map((n) => parseInt(n)).reduce((a,c) => a + c)
}