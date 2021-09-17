let buttons = document.querySelectorAll(".field")
let btn11 = document.querySelector("#btn11");
let btn12 = document.querySelector("#btn12");
let btn13 = document.querySelector("#btn13");

let btn21 = document.querySelector("#btn21");
let btn22 = document.querySelector("#btn22");
let btn23 = document.querySelector("#btn23");

let btn31 = document.querySelector("#btn31");
let btn32 = document.querySelector("#btn32");
let btn33 = document.querySelector("#btn33");


let plaer1 = true;

console.log("hellpo")
if(buttons){
buttons.forEach(element =>{
    element.onclick = function(){
    
        if(element.textContent == ""){
            if(plaer1){
                element.textContent = "X"
                plaer1 = false;
            }
            else{
             element.textContent = "O"
             plaer1 = true;          
        }
       
       
if((btn11.textContent == "X" && btn12.textContent == "X" && btn13.textContent == "X") 
|| (btn21.textContent == "X" && btn22.textContent == "X" && btn23.textContent == "X")
|| (btn31.textContent == "X" && btn32.textContent == "X" && btn33.textContent == "X")

|| (btn11.textContent == "X" && btn22.textContent == "X" && btn33.textContent == "X")
|| (btn13.textContent == "X" && btn22.textContent == "X" && btn31.textContent == "X")

|| (btn11.textContent == "X" && btn21.textContent == "X" && btn31.textContent == "X")
|| (btn12.textContent == "X" && btn22.textContent == "X" && btn32.textContent == "X")
|| (btn13.textContent == "X" && btn23.textContent == "X" && btn33.textContent == "X")
)
    {

    console.log("x - won")
    
}
       }
    }
    });
}



let close = document.querySelector(".window .head .close")

if(close)
{
    close.onclick = function(e){
           let window = e.target.closest(".window")
           if(window){
               window.remove()
           }
    }
}

let head = document.querySelector(".window .head");
if(head)
{
    let isMoveing = false;
    let x = 0,  y = 0
    head.onmousedown = function(e){
        isMoveing = true;
        x = e.clientX;
        y = e.clienty;
    }

    head.onmouseup = function(e){
        isMoveing = false;
    }

    head.onmouseout = function(e){
        isMoveing = false;
    }

    head.onmousemove = function(e){
        if(!isMoveing)return;

        let win = head.parentElement
        let bound = win.getBoundingClientRect();
        win.style.top = "" +  (bound.top +(e.clientY - y)) + "px"
        win.style.left = "" + (bound.left + (e.clientX - x)) + "px"
        x = e.clientX;
        y = e.clientY;
    }
}


