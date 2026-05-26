function solution(t, p) {
    // t를 각 위치마다 p.length 크기대로 자른 후 parseInt한 배열 반환
    let newArr = [];
    for (let i = 0; i < t.length-p.length+1; i++){
        newArr.push(parseInt(t.slice(i,i+p.length)));
    }
    // parseInt(p)와 newSliceArr 요소마다 비교해서 작거나 같은 수만 남김: filter
    // 갯수 반환
    return newArr.filter((n) => parseInt(p) >= n).length
}