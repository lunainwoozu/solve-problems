const fs = require('fs');
let score = Number(fs.readFileSync(0));
let grade = ""

for (let i = score; i <= 100; i++){
    if (score >= 90){
        grade += 'A ';
        score++;
    } else if (score >= 80){
        grade += 'B ';
        score++;
    } else if (score >= 70){
        grade += 'C ';
        score++;
    } else if (score >= 60){
        grade += 'D ';
        score++;
    } else {
        grade += 'F ';
        score++;
    }
}

console.log(grade.trimEnd())