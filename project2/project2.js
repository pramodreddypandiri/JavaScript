const red=document.querySelector(".red")
const blue=document.querySelector(".blue")
const orange=document.querySelector(".orange")
const emerald=document.querySelector(".emerald")
const cyan=document.querySelector(".cyan")
const center=document.querySelector(".center")
//console.log(window.getComputedStyle(red).backgroundColor);
const getBgColor=(selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;

}
console.log(getBgColor(emerald));