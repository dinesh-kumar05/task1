async function foo(){
    var res=await fetch("https://api.chucknorris.io/jokes/random");
    var res1=await res.json();
    console.log(res1)
    return bar(res1)

    try {
       var any = await res1() 
       console.log(any);
    } catch (error) {
       console.log(error)
    }
}
foo();

async function bar(res1){
 
var div=document.createElement("div");
div.innerHTML=`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Catagories</div>
<div class="card-body">
<h5 class="card-title">URL-${res1.url}</h5>
<p class="card-text">JOKE-${res1.value}</p>
</div>
</div>`;
document.body.append(div);


}
