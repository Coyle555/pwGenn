const pwValue = document.getElementById("pw");
const goon = document.getElementById("pwGen");
console.log(pwValue.innerHTML);
const doof = () => {
  let pwLength = prompt("How many chars in pw?");
  let capsCheck = prompt("Would you like capital letters?").toLowerCase();
  let result = "";
  var charset = "abcdefghijklmnopqrstuvwxyz";
  let charsetC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (capsCheck == "yes") {
    let lowAndUp = charset.concat(charsetC);
    for (var i = 0; i < pwLength; i++)
      result += lowAndUp[Math.floor(Math.random() * lowAndUp.length)];
    pwValue.innerHTML = `Your password is: ${result}`;
  } else if (capsCheck == "no") {
    for (var i = 0; i < pwLength; i++)
      result += charset[Math.floor(Math.random() * charset.length)];
    pwValue.innerHTML = `Your password is: ${result}`;
  }
};

goon.addEventListener("click", doof);
