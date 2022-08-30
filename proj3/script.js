const courses=[
    {
        title:" React course",
        price:"2.3",
    },
    {
        title:" Angular course",
        price:"2.9",
    },
    {
        title:" Nodecourse",
        price:"3",
    },
    {
        title:" Vue course",
        price:"2.5",
    },
    {
        title:"Django",
        price:"2",
    },
];
function generateList(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach(course =>{
        const li = document.createElement("li");
        li.classList.add("list-group-item")
        
        const name = document.createTextNode(course.title)
        li.appendChild(name)
        
        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price)
        span.appendChild(price)
        li.appendChild(span)
        ul.appendChild(li)
    })
}
//generateList();
window.addEventListener("load",generateList);
const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price - b.price)
    generateList();
});
const dbutton = document.querySelector(".de-sort");
dbutton.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price - a.price);
    generateList();
})