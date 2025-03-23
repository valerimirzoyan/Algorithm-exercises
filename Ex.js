//Ex24 a)
for (let i = 8; i >= 1; i--) {
    let row = "";
    for(let j = 8; j >= 9 - i; j--) {
        row += "0 "
    }
    console.log(row.trim());
}

console.log();

//Ex24 b)
for (let i = 8; i >= 1; i--) {
    let row = "";
    for (let j = 8; j >= 9 - i; j--) {
        row += j + " ";
    }
    console.log(row.trim());
}

console.log();

//Ex24 g)
for (let i = 2; i <= 8; i++) {
    let row = "";
    for (let j = i; j <= 8; j++) {
        row += j + " ";
    }
    console.log(row.trim());
}

console.log();

//Ex24 d)
for (let i = 0; i <= 8; i++) {
    let row = "";
    for (let j = 2; j <= i + 1; j++) {
        row += j + " ";
    }
    console.log(row.trim());
}

console.log();

//Ex24 e)
for (let i = 3; i <= 8; i++) {
    let row = "";
    for(let j = 0; j < i; j++) {
        row += i + " ";
    }
    console.log(row.trim());
}

console.log();

//Ex24 z)
for (let i = 21; i <= 25; i++) {
    let row = "";
    for (let j = 0; j < i - 20; j++) {
        row += i + " ";
    }
    console.log(row.trim());
}
