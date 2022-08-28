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
//console.log(getBgColor(emerald));
// var orangeElementColor=getBgColor(orange);
// orange.addEventListener('mouseenter',()=>{
//     center.style.background=orangeElementColor
// });
// var cyanElementColor=getBgColor(cyan);
// cyan.addEventListener('click',()=>{
//     center.style.background=cyanElementColor
// });
const magicColorChanger=(element,color)=>{
     return element.addEventListener("mouseenter",()=>{
        center.style.background=color;
     });
};
magicColorChanger(red,getBgColor(red));
magicColorChanger(blue,getBgColor(blue));
magicColorChanger(orange,getBgColor(orange));
magicColorChanger(emerald,getBgColor(emerald));
magicColorChanger(cyan,getBgColor(cyan));
