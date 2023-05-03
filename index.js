// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const elInputUsername = document.querySelector("#username");
const elSuccesssMessage = document.querySelector(".success-message");
const elFailureMessage = document.querySelector(".failure-message");

const passWord = document.querySelector("#password");
const passWordRetype = document.querySelector("#password-retype");
const isMatchPassword = document.querySelector(".mismatch-message");

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

elInputUsername.onkeyup = () => {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccesssMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elFailureMessage.classList.remove("hide");
    elSuccesssMessage.classList.add("hide");
  }
};

passWordRetype.onkeyup = () => {
  console.log(passWordRetype.value);
  if (isMatch(passWord.value, passWordRetype.value)) {
    isMatchPassword.classList.add("hide");
  } else {
    isMatchPassword.classList.remove("hide");
  }
};
