// EX 3.1
function calculation(payMent) {
  const payingValue = payMent + 3 + payMent * 0.001;
  return payingValue;
}

let payMent = 3000;
console.log(calculation(payMent));

// EX 3.2
function edFriend(name1, name2, name3) {
  console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

function ageFriend(birth) {
  const age = 2024 - birth;
  return age;
}

function friendAge(name1, birth1, name2, birth2, name3, birth3) {
  const age1 = ageFriend(birth1);
  const age2 = ageFriend(birth2);
  const age3 = ageFriend(birth3);
  console.log(
    `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
  );
}

friendAge("wacharasak", 1996, "pornprapa", 1997, "damruong", 1998);

// Challenge
// let score = Math.random()*11
// let score = 112;
// console.log(score);

function grade (score){
    score === 11
    ? console.log("Perfect")
    : score >= 8 && score < 11
    ? console.log("Excellent")
    : score >= 5 && score < 11
    ? console.log("pass")
    : score < 5
    ? console.log("fail")
    : console.log("you are not human");
}
let randomMath = Math.random()*11;
console.log(randomMath);
grade(randomMath);