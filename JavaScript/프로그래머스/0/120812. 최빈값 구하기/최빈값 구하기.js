function solution(array) {
    // 숫자: 갯수 식으로 개체화
    const newArr = array.reduce((a, c) => {a[c] = (a[c] || 0) + 1; return a}, {});
    // 최대 빈도수 구하기
    const maxFreq = Math.max(...Object.values(newArr));
    // newArr의 키(숫자)들 중에서 빈도수가 maxFreq와 같은 것만 추출
    const modes = Object.keys(newArr).filter(key => newArr[key] === maxFreq);
    return modes.length >= 2 ? -1 : parseInt(modes[0]);
}