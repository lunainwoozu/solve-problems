function solution(left, right) {
    const nums = Array.from({length: right - left + 1}, (_, i) => left + i);
    
    return nums.reduce((a, c) => {
        const divisorCount = Array.from({length: c}, (_, i) => i + 1).filter(num => c % num === 0).length;
        return divisorCount % 2 === 0 ? a + c : a - c
    }, 0);
}