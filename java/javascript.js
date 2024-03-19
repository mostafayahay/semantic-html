let title=document.querySelector('.title');
let price=document.querySelector('.price');
let taxes=document.querySelector('.taxes');
let ads=document.querySelector('.ads');
let dis=document.querySelector('.dis');
let total=document.querySelector('.total');
let count=document.querySelector('.count');
let cate=document.querySelector('.cate');
let creat=document.querySelector('.creat');
let tbody=document.querySelector('.tbody');
let deletea = document.querySelector('.delete');
let tit= document.querySelector('.tit');
let cat = document.querySelector('.category');
let search = document.querySelector('.search');
let to=document.querySelector('.to');
let massege=document.querySelector('.massege')
let mood = 'create';
let moodsearch='title';
let inarray;
//console.log(deletea);
//function event input price,taxea,ads,discount,total
function hi(){ 
  if(price.value!=''){
  let reuslt=(+price.value + +taxes.value +  +ads.value) - +dis.value;
  total.innerHTML =reuslt;
   to.style.background='green'
                      }
  else{
   total.innerHTML=' ';
   to.style.backgroundColor='red'
     }}  
/*if( total.innerHTML!==`${hi()}`){
  to.style.backgroundColor='red'

}else{
  to.style.backgroundColor='green'
}*/
//array story title 
let datapro;
if(localStorage.proudect!=null){
  datapro=JSON.parse(localStorage.proudect);
}
else{
    datapro=[];
}
//event story localstorage object && count
creat.onclick=function(){ 
    //event loob
    //if(title.value!=''&&cate.value!=''&&taxes.value!=''){
    let newpro={
       title: title.value.toLowerCase(),
       price:price.value,
       taxes:taxes.value,
       ads: ads.value,
       discount: dis.value,
       total: total.textContent,
       count:count.value,
       category:cate.value.toLowerCase(),
    }                        
    if(newpro.count<=100){
    if(mood==='create'){
     if(newpro.count>1){
      for(let k=1; k<=count.value;k++){
            datapro.push(newpro);
      }  }
      else{
        datapro.push(newpro);
      }
}   
else{
    datapro[inarray]=newpro;
    mood='create';
    creat.innerHTML='create'
   } dataclear(); }
 // }
  if (title.value="") {
    massege.innerHTML=`<span>enter data</span>`
  }
  else if(title.value!=''){
    massege.innerHTML=``
  }
      localStorage.setItem('proudect',JSON.stringify(datapro));
       
       showdata();
    }
  
//loop add array datapro
function showdata(){
    let table='';
for(let h=0;h<datapro.length;h++){
    table +=`
    <tr>
    <td>${h}</td>
    <td>${datapro[h].title}</td>
    <td>${datapro[h].price}</td>
    <td>${datapro[h].taxes}</td>
    <td>${datapro[h].ads}</td>
    <td>${datapro[h].discount}</td>
    <td>${datapro[h].total}</td>
    <td>${datapro[h].count}</td>
    <td>${datapro[h].category}</td>
    <td><input onclick="updata(${h});" type="button" value="update"></td>
    <td><input onclick="deletedata(${h});" type="button" value="delete"></td>
  </tr>
  `
  inarray=h;
}
  tbody.innerHTML=table
  if(datapro.length >0 ){
    deletea.innerHTML=`
    <button onclick="deleteal();" class="button";> delete all(${datapro.length}) </button>`;
}
else{
    deletea.innerHTML=` `;
}
}
//clear data input
function dataclear(){
    title.value='',
    price.value='',
    taxes.value='',
    ads.value='' ,
    dis.value='' ,
    total.innerHTML= '',
    count.value='',
    cate.value=''
}
function updata(e){

  title.value = datapro[e].title,
  price.value=datapro[e].price,
  taxes.value=datapro[e].taxes,
  ads.value=datapro[e].ads,
  dis.value=datapro[e].discount,
  total.innerHTML = datapro[e].total,
  count.value = datapro[e].count,
   cate.value = datapro[e].category;
   inarray=e;
    mood='update';
    creat.innerHTML='updata'
window.scroll({
    top:0,
behavior:"smooth"
})
}
function deletedata(i){
datapro.splice(i,1);
localStorage.proudect=JSON.stringify(datapro);
showdata();
}
function deleteal(){
    localStorage.clear(); 
    datapro.splice(0);
    showdata();
}
function getsearch(id){
  if(id =='title'){
moodsearch='title';
search.placeholder='search by title';
console.log(moodsearch) ;}
else if(id=='category'){
    moodsearch='category';
    search.placeholder='search by category';
    console.log(moodsearch) ;
  }
}

search.onkeyup=function(){
  let tab='';
  if(moodsearch=='title'){
 for(let r=0 ;r<datapro.length;r++){
 if(datapro[r].title.includes(search.value.toLowerCase())){
    tab +=`
    <tr>
    <td>${r}</td>
    <td>${datapro[r].title}</td>
    <td>${datapro[r].price}</td>
    <td>${datapro[r].taxes}</td>
    <td>${datapro[r].ads}</td>
    <td>${datapro[r].discount}</td>
    <td>${datapro[r].total}</td>
    <td>${datapro[r].count}</td>
    <td>${datapro[r].category}</td>
    <td><input onclick="updata(${r});" type="button" value="update"></td>
    <td><input onclick="deletedata(${r});" type="button" value="delete"></td>
  </tr>
  `
  tbody.innerHTML=tab;
}
}
}
else{
  for(let r=0 ;r<datapro.length;r++){
    if(datapro[r].category.includes(search.value.toLowerCase())){
     tab +=`
     <tr>
     <td>${r}</td>
     <td>${datapro[r].title}</td>
     <td>${datapro[r].price}</td>
     <td>${datapro[r].taxes}</td>
     <td>${datapro[r].ads}</td>
     <td>${datapro[r].discount}</td>
     <td>${datapro[r].total}</td>
     <td>${datapro[r].count}</td>
     <td>${datapro[r].category}</td>
     <td><input onclick="updata(${r});" type="button" value="update"></td>
     <td><input onclick="deletedata(${r});" type="button" value="delete"></td>
   </tr>
   `
   tbody.innerHTML=tab;
 }
 }
 }
}
/*if(title.value!=''){
  setInterval(function() {
    title.nextElementSibling.innerHTML='please enter data'}
    ,1000)
}*/
showdata();
// p=[{titl:'sd'},'mos','motafa','ahmed','hi']
//console.log( p[].titl.includes('sd'));