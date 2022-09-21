// -------------------- question no  1 ------------------------
var input_1 = window.document.getElementById("q-input-1");
var output_1 = window.document.getElementById("q-output-1");
/**
 * print number taken from user
 */
function fun_1() {
  if (input_1.value == "" || isNaN(Number(input_1.value))) {
    output_1.innerHTML = "Enter Number !";
  } else {
    output_1.innerHTML = input_1.value;
  }
}
// -------------- End Of question ------------
// -------------------- question no  2 ------------------------
var input_2 = window.document.getElementById("q-input-2");
var output_2 = window.document.getElementById("q-output-2");
/**
 * print yes if number can divide by 3 and 4 otherwise no
 */
function fun_2() {
  if (input_2.value == "" || isNaN(Number(input_2.value))) {
    output_2.innerHTML = "Enter Number !";
  } else if (input_2.value % 3 == 0 && input_2.value % 4 == 0) {
    output_2.innerHTML = "Yes";
  } else {
    output_2.innerHTML = "No";
  }
}
// -------------- End Of question ------------
// -------------------- question no  3 ------------------------
var input_3 = window.document.getElementById("q-input-3");
var input_3_2 = window.document.getElementById("q-input-3-2");
var output_3 = window.document.getElementById("q-output-3");
/**
 * print max number
 */
function fun_3() {
  if (
    input_3.value == "" ||
    input_3_2.value == "" ||
    isNaN(Number(input_3.value)) ||
    isNaN(Number(input_3_2.value))
  ) {
    output_3.innerHTML = "Enter Number !";
  } else if (Number(input_3.value) > Number(input_3_2.value)) {
    output_3.innerHTML = input_3.value;
  } else {
    output_3.innerHTML = input_3_2.value;
  }
}
// -------------- End Of question ------------
// -------------------- question no  4 ------------------------
var input_4 = window.document.getElementById("q-input-4");
var output_4 = window.document.getElementById("q-output-4");
function fun_4() {
  if (input_4.value == "" || isNaN(Number(input_4.value))) {
    output_4.innerHTML = "Enter Number !";
  } else if (Number(input_4.value >= 0)) {
    output_4.innerHTML = "Positive";
  } else {
    output_4.innerHTML = "Negative";
  }
}
// -------------- End Of question ------------
// -------------------- question no  5 ------------------------
function fun_5() {
  var inputs_5 = [];
  inputs_5[0] = Number(window.document.getElementById("q-input-5").value);
  inputs_5[1] = Number(window.document.getElementById("q-input-5-2").value);
  inputs_5[2] = Number(window.document.getElementById("q-input-5-3").value);
  var output_5 = window.document.getElementById("q-output-5");
  var output_5_2 = window.document.getElementById("q-output-5-2");
  var max = inputs_5[0];
  var min = inputs_5[0];
  for (var i = 0; i < inputs_5.length; i++) {
    if (isNaN(inputs_5[i]) || inputs_5[i] == "") {
      output_5.innerHTML = "Enter Number !";
      output_5_2.innerHTML = "Enter Number !";
      break;
    } else if (inputs_5[i] >= max) {
      max = inputs_5[i];
    } else if (inputs_5[i] <= min) {
      min = inputs_5[i];
    }

    output_5.innerHTML = `Max Num = ${max}`;
    output_5_2.innerHTML = `Min Num = ${min}`;
  }
}
// -------------- End Of question ------------
// -------------------- question no  6 ------------------------
function fun_6() {
  var input_6 = Number(window.document.getElementById("q-input-6").value);
  var output_6 = window.document.getElementById("q-output-6");
  if (input_6 == "" || isNaN(input_6)) {
    output_6.innerHTML = "Enter Number !";
  } else if (input_6 % 2 == 0) {
    output_6.innerHTML = "Even";
  } else if (input_6 % 2 !== 0) {
    output_6.innerHTML = "Odd";
  }
}
// -------------- End Of question ------------
// -------------------- question no  7 ------------------------
function fun_7() {
  var input_7 = window.document.getElementById("q-input-7").value;
  var output_7 = window.document.getElementById("q-output-7");
  if (input_7 == "" || !isNaN(input_7)) {
    output_7.innerHTML = "Enter Character !";
  } else if (input_7.length > 1) {
    output_7.innerHTML = "Only One Character !";
  } else if (
    input_7.toLowerCase() == "a" ||
    input_7.toLowerCase() == "e" ||
    input_7.toLowerCase() == "i" ||
    input_7.toLowerCase() == "o" ||
    input_7.toLowerCase() == "o"
  ) {
    output_7.innerHTML = "Vowel";
  } else {
    output_7.innerHTML = "Consonant";
  }
}
// -------------------- question no  8 ------------------------
function fun_8() {
  var input_8 = Number(window.document.getElementById("q-input-8").value);
  var output_8 = window.document.getElementById("q-output-8");
  var sumString = "";
  if (input_8 == "" || isNaN(input_8)) {
    output_8.innerHTML = "Enter Number !";
  } else {
    for (var i = 1; i <= input_8; i++) {
      sumString = sumString + ` ${i} , `;
    }
    output_8.innerHTML = sumString;
  }
}
// -------------- End Of question ------------
// -------------------- question no  9 ------------------------
function fun_9() {
  var input_9 = Number(window.document.getElementById("q-input-9").value);
  var output_9 = window.document.getElementById("q-output-9");
  var multiplication_String = "";
  var multiplication_Result = 1;
  if (input_9 == "" || isNaN(input_9)) {
    output_9.innerHTML = "Enter Number !";
  } else {
    for (var i = 1; i <= 12; i++) {
      multiplication_Result = input_9 * i;
      multiplication_String =
        multiplication_String + `&nbsp ${multiplication_Result} &nbsp`;
    }
    output_9.innerHTML = multiplication_String;
  }
}

// -------------- End Of question ------------
// -------------------- question no  10 ------------------------
function fun_10() {
  var input_10 = Number(window.document.getElementById("q-input-10").value);
  var output_10 = window.document.getElementById("q-output-10");
  var sumString = "";
  if (input_10 == "" || isNaN(input_10)) {
    output_10.innerHTML = "Enter Number !";
  } else {
    for (var i = 1; i <= input_10; i++) {
      if (i % 2 == 0) {
        sumString = sumString + `&nbsp ${i} &nbsp`;
      }
    }
    output_10.innerHTML = sumString;
  }
}
// -------------------- question no  11 ------------------------
function fun_11() {
  var input_11 = Number(window.document.getElementById("q-input-11").value);
  var input_11_2 = Number(window.document.getElementById("q-input-11-2").value);
  var output_11 = window.document.getElementById("q-output-11");
  if (
    input_11 == "" ||
    input_11_2 == "" ||
    isNaN(input_11) ||
    isNaN(input_11_2)
  ) {
    output_11.innerHTML = "Enter Number !";
  } else {
    output_11.innerHTML = input_11 ** input_11_2;
  }
}
// -------------- End Of question ------------
// -------------------- question no  12 ------------------------
function fun_12() {
  var input_12 = [];
  input_12[0] = Number(window.document.getElementById("q-input-12").value);
  input_12[1] = Number(window.document.getElementById("q-input-12-2").value);
  input_12[2] = Number(window.document.getElementById("q-input-12-3").value);
  input_12[3] = Number(window.document.getElementById("q-input-12-4").value);
  input_12[4] = Number(window.document.getElementById("q-input-12-5").value);
  var output_12 = window.document.getElementById("q-output-12");
  var output_12_2 = window.document.getElementById("q-output-12-2");
  var output_12_3 = window.document.getElementById("q-output-12-3");

  var total = 0;
  var average = 0;
  var percentage = 0;

  for (var i = 0; i < input_12.length; i++) {
    if (input_12[i] == "" || isNaN(input_12[i])) {
      output_12.innerHTML = "Enter Number !";
      output_12_2.innerHTML = "Enter Number !";
      output_12_3.innerHTML = "Enter Number !";
      return;
    } else {
      total = total + input_12[i];
    }
  }
  average = total / 5;
  percentage = (total / 500) * 100;
  output_12.innerHTML = `Total = ${total}`;
  output_12_2.innerHTML = `Average = ${average}`;
  output_12_3.innerHTML = `Percentage = ${percentage}`;
}
// -------------- End Of question ------------
// -------------------- question no  13 ------------------------
function fun_13() {
  var input_13 = Number(window.document.getElementById("q-input-13").value);
  var output_13 = window.document.getElementById("q-output-13");
  if (input_13 == "" || isNaN(input_13)) {
    output_13.innerHTML = "Enter Number !";
  } else if (input_13 == 1) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>January</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 2) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>February</span>  and Days = <span style='color: #fdbb2d;'>28 / 29</span>";
  } else if (input_13 == 3) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>March</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 4) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>April</span>  and Days = <span style='color: #fdbb2d;'>30</span>";
  } else if (input_13 == 5) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>May</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 6) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>June</span>  and Days = <span style='color: #fdbb2d;'>30</span>";
  } else if (input_13 == 7) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>July</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 8) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>August</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 9) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>Septemper</span>  and Days = <span style='color: #fdbb2d;'>30</span>";
  } else if (input_13 == 10) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>October</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else if (input_13 == 11) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>November</span>  and Days = <span style='color: #fdbb2d;'>30</span>";
  } else if (input_13 == 12) {
    output_13.innerHTML =
      "This Month = <span style='color: #fdbb2d;'>December</span>  and Days = <span style='color: #fdbb2d;'>31</span>";
  } else {
    output_13.innerHTML = "Maximum Num is 12 !";
  }
}
// -------------- End Of question ------------
// -------------------- question no  14 ------------------------
function fun_14() {
  var input_14 = [];
  input_14[0] = Number(window.document.getElementById("q-input-14").value);
  input_14[1] = Number(window.document.getElementById("q-input-14-2").value);
  input_14[2] = Number(window.document.getElementById("q-input-14-3").value);
  input_14[3] = Number(window.document.getElementById("q-input-14-4").value);
  input_14[4] = Number(window.document.getElementById("q-input-14-5").value);
  var output_14 = window.document.getElementById("q-output-14");
  var total = 0;
  for (var i = 0; i < input_14.length; i++) {
    if (input_14[i] == "" || isNaN(input_14[i])) {
      output_14.innerHTML = "Enter Only Numbers !";
      return;
    } else {
      total = total + input_14[i];
    }
  }
  var percentage = (total / 500) * 100;
  if (percentage >= 90) {
    output_14.innerHTML = `Percentage = <span style='color: #fdbb2d;'>${percentage}</span> and Grade = <span style='color: #fdbb2d;'>A</span>`;
  } else if (percentage >= 80) {
    output_14.innerHTML = `Percentage = <span style='color: #fdbb2d;'>${percentage}</span> and Grade = <span style='color: #fdbb2d;'>B</span>`;
  } else if (percentage >= 70) {
    output_14.innerHTML = `Percentage = <span style='color: #fdbb2d;'>${percentage}</span> and Grade = <span style='color: #fdbb2d;'>C</span>`;
  } else if (percentage >= 60) {
    output_14.innerHTML = `Percentage = <span style='color: #fdbb2d;'>${percentage}</span> and Grade = <span style='color: #fdbb2d;'>D</span>`;
  } else if (percentage >= 50) {
    output_14.innerHTML = `Percentage = <span style='color: #fdbb2d;'>${percentage}</span> and Grade = <span style='color: #fdbb2d;'>E</span>`;
  } else {
    output_14.innerHTML = `Percentage = <span style='color: red;'>${percentage}</span> and Grade = <span style='color: red;'>F</span>`;
  }
}
// -------------- End Of question ------------
// -------------------- question no  15 ------------------------
function fun_15() {
  var input_15 = Number(window.document.getElementById("q-input-15").value);
  var output_15 = window.document.getElementById("q-output-15");
  switch (true) {
    case input_15 == "":
      output_15.innerHTML = "Enter Only Numbers !";
      break;
    case isNaN(input_15):
      output_15.innerHTML = "Enter Only Numbers !";
      break;
    case input_15 > 12:
      output_15.innerHTML = "Maximum Number Is 12 !";
      break;
    case input_15 == 1:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 2:
      output_15.innerHTML = "Days = 28 / 29";
      break;
    case input_15 == 3:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 4:
      output_15.innerHTML = "Days = 30";
      break;
    case input_15 == 5:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 6:
      output_15.innerHTML = "Days = 30";
      break;
    case input_15 == 7:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 8:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 9:
      output_15.innerHTML = "Days = 30";
      break;
    case input_15 == 10:
      output_15.innerHTML = "Days = 31";
      break;
    case input_15 == 11:
      output_15.innerHTML = "Days = 30";
      break;
    case input_15 == 12:
      output_15.innerHTML = "Days = 31";
      break;
  }
}
// -------------- End Of question ------------
// -------------------- question no  16 ------------------------
function fun_16() {
  var input_16 = window.document.getElementById("q-input-16").value;
  var output_16 = window.document.getElementById("q-output-16");

  switch (true) {
    case input_16 == "":
      output_16.innerHTML = "Enter Character";
      break;
    case input_16.length > 1:
      output_16.innerHTML = "Enter One Character";
      break;
    case !isNaN(input_16):
      output_16.innerHTML = "Enter Character Only";
      break;
    case input_16 == "a" ||
      input_16 == "e" ||
      input_16 == "i" ||
      input_16 == "o" ||
      input_16 == "u":
      output_16.innerHTML = "Vowel";
      break;
    default:
      output_16.innerHTML = "consonant";
  }
}
// -------------- End Of question ------------
// -------------------- question no  17 ------------------------
function fun_17() {
  var input_17 = Number(window.document.getElementById("q-input-17").value);
  var input_17_2 = Number(window.document.getElementById("q-input-17-2").value);
  var output_17 = window.document.getElementById("q-output-17");
  switch (true) {
    case input_17 == "" || input_17_2 == "":
      output_17.innerHTML = "Enter Number";
      break;
    case isNaN(input_17) || isNaN(input_17_2):
      output_17.innerHTML = "Enter Only Numbers ";
      break;
    case input_17 > input_17_2:
      output_17.innerHTML = `${input_17} Is The Maximum Number`;
      break;
    case input_17 < input_17_2:
      output_17.innerHTML = `${input_17_2} Is The Maximum Number`;
      break;
  }
}
// -------------- End Of question ------------
// -------------------- question no  18 ------------------------
function fun_18() {
  var input_18 = Number(window.document.getElementById("q-input-18").value);
  var output_18 = window.document.getElementById("q-output-18");
  switch (true) {
    case input_18 == "":
      output_18.innerHTML = "Enter Number";
      break;
    case isNaN(input_18):
      output_18.innerHTML = "Enter Only Numbers ";
      break;
    case input_18 % 2 == 0:
      output_18.innerHTML = `Even`;
      break;
    case input_18 !== 0:
      output_18.innerHTML = `Odd`;
      break;
  }
}
// -------------- End Of question ------------
// -------------------- question no  19 ------------------------
function fun_19() {
  var input_19 = window.document.getElementById("q-input-19").value;
  var output_19 = window.document.getElementById("q-output-19");
  switch (true) {
    case input_19.length == 0:
      output_19.innerHTML = "Enter Number";
      break;
    case isNaN(input_19):
      output_19.innerHTML = "Enter Only Numbers ";
      break;
    case input_19 > 0:
      output_19.innerHTML = `Positive`;
      break;
    case input_19 < 0:
      output_19.innerHTML = `Negative`;
      break;
    case input_19 == 0:
      output_19.innerHTML = `Zero`;
      break;
  }
}
// -------------- End Of question ------------
// -------------------- question no  20 calculator ------------------------
var output_20 = window.document.getElementById("output-screen");
function display(num) {
  output_20.value = output_20.value + num;
}
function cl() {
  output_20.value = "";
}
function del() {
  output_20.value = output_20.value.slice(0, -1);
}
function calculate() {
  var calc_arr = [];
  calc_arr = output_20.value.split("");
  calc_arr[0]=Number(calc_arr[0]);
  calc_arr[2]=Number(calc_arr[2]);
  if(calc_arr.length>3){
    window.alert("Only 3 Characters Simple Calculator");
  }
  else if( isNaN(calc_arr[0]) || isNaN(calc_arr[2])){
    window.alert("Just Numbers !");
    output_20.value="";
    return;
  }
  switch (calc_arr[1]) {
    case "+":
      output_20.value = calc_arr[0] + calc_arr[2];
      break;
      case "-":
      output_20.value = calc_arr[0] - calc_arr[2];
      break;
      case "*":
      output_20.value = calc_arr[0] * calc_arr[2];
      break;
      case "/":
      output_20.value = calc_arr[0] / calc_arr[2];
      break;
      case "%":
      output_20.value = calc_arr[0] % calc_arr[2];
      break;
      default:
        output_20.value=0;
  }
}
