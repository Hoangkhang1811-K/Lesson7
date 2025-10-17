

function converTemp(){
  let doC= +document.getElementById("c").value;
  let doF=(doC*(9/5))+32;
  document.getElementById("resultT").innerHTML="Độ là: "+doF;
}