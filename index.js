const reset = document.querySelector(".res");
const dec = document.querySelector(".dec");
const inc = document.querySelector(".inc");

var count = 0;
reset.addEventListener("click",function(){
    count = 0;
    document.querySelector("h1").textContent = count;
});

dec.addEventListener("click",function(){
    count--;
    document.querySelector("h1").textContent = count;
})

inc.addEventListener("click",function(){
    count++;
    document.querySelector("h1").textContent = count;
})
