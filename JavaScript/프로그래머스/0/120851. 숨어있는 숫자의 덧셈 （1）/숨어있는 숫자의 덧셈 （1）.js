function solution(my_string) {
    let arr = my_string.split('');
    let num = arr.filter(item => !isNaN(item));
    return num.reduce((acc, cur) => acc + Number(cur), 0);
}
// string을 각 스펠링들의 배열로 변환 후 !isNaN을 통해 배열 내 아이템을 숫자인 것만 남긴다(아직 문자열 상태임)
// 그것을 reduce로 더한다.
// const nums = my_string.replace(/[^0-9]/g, '').split('');
// 정규 표현식을 사용하면 !isNaN의 혹시 모를 에러를 피하고, 계속해서 새로운 배열을 만들지 않아 메모리 양을 줄인다.