//ROY SEBASTIAN
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}
      //untuk membuat jenis kelamin
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

      // rumus menghitung bmi
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

      // Untuk menentukan jenis berat badan
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan berat badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal (ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan berat badan';
     }else if(bmi>=30.0){
    result = 'Kegemukan (Obesitas)';
     }

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = result;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

