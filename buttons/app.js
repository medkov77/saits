const btnClicked = function (target) {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
};
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "i"];
const container = document.querySelector(".left-buttons");
const finish = document.querySelector(".finish");
const draft = document.querySelector(".draft");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const draftNum = document.querySelector(".draft-num");
const finishNum = document.querySelector(".finish-num");
let draftSum = 0;
let finishSum = 0;

const plusFunc = function () {
  if (draft.classList.contains("active-right")) {
    draftSum++;
    draftNum.innerHTML = draftSum;
  }
  if (finish.classList.contains("active-right")) {
    finishSum++;
    finishNum.innerHTML = finishSum;
  }
};
const minusFunc = function () {
  if (draft.classList.contains("active-right")) {
    if (draftSum > 0) draftSum--;
    draftNum.innerHTML = draftSum;
  }
  if (finish.classList.contains("active-right")) {
    if (finishSum > 0) finishSum--;
    finishNum.innerHTML = finishSum;
  }
};

function createButton(letter, num) {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.addEventListener("click", btnClicked);
  btn.innerHTML = letter + num;
  container.appendChild(btn);
}

for (let i = 9; i >= 0; i--) {
  letters.forEach((letter) => {
    createButton(letter, i);
  });
}

draft.addEventListener("click", () => {
  if (finish.classList.contains("active-right")) {
    return;
  } else {
    if (draft.classList.contains("active-right")) {
      draft.classList.remove("active-right");
    } else {
      draft.classList.add("active-right");
    }
  }
});

finish.addEventListener("click", () => {
  if (draft.classList.contains("active-right")) {
    return;
  } else {
    if (finish.classList.contains("active-right")) {
      finish.classList.remove("active-right");
    } else {
      finish.classList.add("active-right");
    }
  }
});

plus.addEventListener("click", plusFunc);
minus.addEventListener("click", minusFunc);
