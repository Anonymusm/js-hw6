// 1
let number = 1;
while (number < 10)
    console.log(number)
// 2
for (let i = 2; i <= 20; i = i + 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
// 3
for (let i = 1; i <= 10; i += 1) {
  console.log(7 * i);
}
// 4
let i = 1;
while (i <= 5) {
  console.log(i);
  i += 1;
}
// 5
for (let i = 1; i <= 10; i += 1) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
// 6
let n = 19;
let i = 18;
while (true) {
  if (i >= n) {
    break;
  }
  console.log(i);
  i += 1;
}
// 7
let i = 1;

while (i <= 20) {
    if (i % 3 === 0) {
        i += 1; 
        continue;
    }
    console.log(i);
    i += 1;
}

