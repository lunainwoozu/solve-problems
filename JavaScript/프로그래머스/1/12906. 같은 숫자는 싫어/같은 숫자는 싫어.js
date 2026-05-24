function solution(arr)
{
    if (arr.length !== 0) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (newArr[newArr.length - 1] !== arr[i]) newArr.push(arr[i]);
        }
        return newArr;
    } else {
        return arr;
    }
}