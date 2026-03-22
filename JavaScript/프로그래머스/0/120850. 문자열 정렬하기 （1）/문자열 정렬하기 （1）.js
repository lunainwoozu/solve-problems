function solution(my_string) {
    let answer = [];
    let strlist = my_string.replace(/[^0-9]/g, '');
    for (const i of strlist) answer.push(Number(i));
    return answer.sort();
}