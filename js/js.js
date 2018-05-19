//var name_Logo = prompt("What You Want Name Of Logo ");
//document.getElementById("Logo_name").innerHTML=name_Logo;

function reg() {

    'use strict'

var Email=document.getElementById('Email').value,
    Pass=document.getElementById('Password').value,
    Phone=document.getElementById('Phone').value;
    

   

if(Email=='Hu@Hu.com'||!isNaN(Pass)||Phone=='123'){// isNan to Write Password Number Only
        alert("Welcom Mr Hussein");
}
else{
    alert("Sorry Happen Error");
}

}


////////////////////
//    Events     //
///////////////////


var     Button=document.getElementById("Button");
Button.onmouseover = function (){
    alert("Hello From Hovver");
}

var     Button=document.getElementById("Button");
Button.onmousewheel = function (){
    alert("Hello From on mouse wheel");
}


window.onload=function(){

var My_div_show =document.getElementById("show-price"),
    button_cul=document.getElementById("Cul-price"),
    select_val=document.getElementById("Select"),
    input_price=document.getElementById("input_price");
    select_val.onchange=function(){
        if(!isNaN(input_price.value)){
        My_div_show.innerHTML=input_price.value*select_val.value;
    }
    else{
        alert("Error");
    }
}

    button_cul.onclick=function(){
        My_div_show.innerHTML=input_price.value*select_val.value;        
    }

    input_price.onkeyup=function(){

        My_div_show.innerHTML=input_price.value*select_val.value;    
    }
}




////////////////////
//    Array      //
///////////////////

var first_array=[];
first_array[0]="Hussein";
first_array[1]="Ali";
first_array[2]="Abass";


console.log(first_array);




////////////////////
//    jquery     //
///////////////////











