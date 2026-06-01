function solution(s) {
    const answer = s.split(" ").map((word) => {
        if (word.length === 0) return "";
        let sp = word.split("");
        sp[0] = sp[0].toUpperCase();
        for(let i = 1; i < sp.length; i++){
            sp[i] = sp[i].toLowerCase();
        }
        return sp.join("");
    })
    return answer.join(" ");
}