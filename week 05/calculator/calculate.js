function multiply(){  
num1 = Number(document.calculator.number1.value);  
num2 = Number(document.calculator.number2.value);  
total = num1* num2;  
document.calculator.total.value= total;  
}  
  
function addition(){  
num1 = Number(document.calculator.number1.value);  
num2 = Number(document.calculator.number2.value);  
total = num1 + num2;  
document.calculator.total.value= total;  
}  
  
function subtraction(){  
num1 = Number(document.calculator.number1.value);  
num2 = Number(document.calculator.number2.value);  
total = num1 - num2;  
document.calculator.total.value= total;  
}  
 
  
function division(){  
num1 = Number(document.calculator.number1.value);  
num2 = Number(document.calculator.number2.value);  
total = num1 / num2;  
document.calculator.total.value= total;  
}
