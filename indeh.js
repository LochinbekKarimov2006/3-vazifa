let input0 = document.querySelector("#input0");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let button10 = document.querySelector("#button10");
let button11 = document.querySelector("#button11");
let button12 = document.querySelector("#button12");
let button13 = document.querySelector("#button13");
let txt = document.querySelector("#txt");
button1.addEventListener("click", () => {
  let a = input1.value;
  let c = input2.value;
  for (a; a <= c; a++) txt.textContent += a + "-";
});
button2.addEventListener("click", () => {
  let a = input1.value;
  let c = input2.value;
  for (a; a <= c; a++)
    if (a % 2 == 0) {
      txt.textContent += a + "-";
    }
});
button3.addEventListener("click", () => {
  let a = input1.value;
  let c = input2.value;
  for (a; a <= c; a++) {
    if (a % 2 == 1) {
      txt.textContent += a + "-";
    }
  }
});
button4.addEventListener("click", () => {
  let h = input0.value;
  let d = h * 60;
  txt.textContent += d + "-minut";
});
button5.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let d = Number(input0.value);
  let l = (a - 1970) * 365;
  let k = c * 30.5;
  let o = l + k + d;
  txt.textContent += o + "-YILNI VA OYNI KUNGA AYLANTIRGANDA";
});
button6.addEventListener("click", () => {
  let h = Number(input0.value);
  let d = h + 1;
  txt.textContent += d + "";
});
button7.addEventListener("click", () => {
  let a = input1.value;
  let c = input2.value;
  function ch() {
    return a.substring(c);
  }
  ch();
  txt.textContent += ch() + "";
});
button8.addEventListener("click", () => {
  let a = input0.value;
  txt.textContent += "something " + a;
});
button9.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let m = a + c;
  txt.textContent += m + "=javob  ";
});
button10.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let m = a - c;
  txt.textContent += m + "=javob  ";
});
button11.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let m = a * c;
  txt.textContent += m + "=javob  ";
});
button12.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let m = a / c;
  txt.textContent += m + "=javob  ";
});
button13.addEventListener("click", () => {
  let a = Number(input1.value);
  let c = Number(input2.value);
  let m = a % c;
  txt.textContent += m + "=javob  ";
});
