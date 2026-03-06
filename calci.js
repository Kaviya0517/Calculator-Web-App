let display=document.getElementById("display");
let buttons=document.querySelectorAll("button");

buttons.forEach(function(button){

button.onclick=function(){

let value=button.innerText;

if(value === "AC"){
display.innerText="0";
}

else if(value === "C"){

display.innerText=display.innerText.slice(0,-1);

if(display.innerText===""){
display.innerText="0";
}
}

else if(value=== "+/-"){
   if(display.innerText.startsWith("-")){
display.innerText=display.innerText.slice(1);
}
else{
display.innerText="-"+display.innerText;
}
}

else if(value==="="){
display.innerText=eval(display.innerText);
}

else{
if(display.innerText==="0"){
display.innerText=value;
}else{
display.innerText+=value;
}
}
}
});