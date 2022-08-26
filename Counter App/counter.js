var counter=document.querySelector(".counter")
var followers=document.querySelector(".followers")
let count=1;
setInterval(()=>{
    if (count<800){
        count++
        counter.innerText=count

    }
    
},1);
setTimeout(()=>{
    followers.innerText="Followers on facebook";
},3000);