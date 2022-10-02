function calculator(){
    console.log("calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    sum(num1,num2);
    multiply(num1,num2);
    substract(num1,num2);
    divide(num1,num2);

}

function sum(a,b){
    let total = a + b;
    document.getElementById("sumRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}
function multiply(a,b){
    let total = a * b;
    document.getElementById("mulRes").innerHTML=`<p> ${a} * ${b} = ${total}</p>`;
}
function substract(a,b){
    let total = a - b;
    document.getElementById("subRes").innerHTML=`<p> ${a} - ${b}
    = ${total}</p>`;
}
function divide(a,b){
    let total = a / b;
    document.getElementById("divRes").innerHTML=`<p> ${a} / ${b} = ${total}</p>`;
}