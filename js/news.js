
// fetch data from API
API_URL='https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=CnPqto6os7t50HKeKoqD7ZUkrgvzD5S4'
fetch(API_URL)
.then((response) => response.json())
.then((data)=>{
let placeholder=document.querySelector('newsitems')
console.log(data)
x=data['results']

let out='';
const items = document.querySelector("#newsitems");
x.forEach(element => {
  // console.log(element['title'])  
  // console.log(element['url'])
  // console.log(element[''])
  // console.log();
out+=`
<div class="card" style="width: 18rem;">
 
  <div class="card-body">
    <h4 class="card-title">${element['title']}</h4>
    <p class="card-text">${element['abstract']}</p>
    <p class="card-type"> Topic:- ${element['section']}</p>
    <p class="card-date"> Date:-  ${element['updated'].slice(0,11)}</p>
    <a href="${element['url']}" class="btn btn-outline-dark">Go To Article</a>
  </div>
</div>
`
});
// console.log(out)

items.innerHTML=out

});




