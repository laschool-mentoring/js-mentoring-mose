// 1. 배열
const spring = "봄";
const summer = "여름";
const fall = "가을";

const season = ["봄", "여름", "가을"];
console.log(season[0]);

// 2. 연산자
const number = 15 / 2;
const number2 = 15 % 2;
console.log(parseInt(number));
console.log(number2);

console.log(3 == "3");
console.log(3 === "3");

// 1부터 1000까지 더하기
let sum = 0;

for(let i = 0; i <= 1000; i++){
    sum += i;
}

console.log(sum);

// 구구단 9단
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i*j));
    }
    console.log("------------");
}

// break 조건문(if) 활용해서 구구단 3단으로 끊기
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i*j));
    }
    console.log("------------");
    if(i == 3) break;
}

// 3단 없애보기
for (let i = 1; i <= 9; i++) {
    if(i == 3) continue;
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i*j));
    }
    console.log("------------");
}

// 함수 선언
function add(a, b) {
    const sum = a + b;
    return sum;
}

const sum1 = add(1, 2);
console.log(sum1);

// 화살표 함수
const sum2 = () => {
    // 처리하는 함수문
    const result = 3;
    console.log(result);
}

const minus = function(a, b) {
    return a - b;
}

const m = (a, b) => {
    return a - b;
}