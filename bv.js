let na1=document.querySelector('#na1');
let na2=document.querySelector('#na2');
let na3=document.querySelector('#na3');
let na4=document.querySelector('#na4');
na1.value=232;
na2.value=521;
na3.value=1463;
na4.value=15;
let l=0;
let u=setInterval(function(){
na1.innerHTML=l++;
na2.innerHTML=l++;
na3.innerHTML=l++;
na4.innerHTML=l++;
if(l==na1.value){
    clearInterval(u)
}
if(l==na2.value){
    clearInterval(u)
}if(l==na3.value)
    clearInterval(u)
}if(l==na4.value){
    clearInterval(u)
}
},
)