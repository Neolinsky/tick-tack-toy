let createWindowBtn = document.querySelector("#createWindowBtn");
/**
 * if(close)
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

 */

    /**
     * <div class="window" style="left:0px; top:0px;">
    <div class="head">
        <span>Окно</span>  
        <span class="close"></span>             
    </div>

    <div class="body">          
        <div id="divfields"></div>   
    </div>
   </div>
     */
 
    let zIndex = 1;


    function createWindow(){
        var rootWindow = document.createElement("div"),
        headNew = document.createElement("div"),
        bodyNew = document.createElement("div"),
        headNewText = document.createElement("div"),
        closeNew = document.createElement("div");


        rootWindow.append(headNew, bodyNew);
        headNew.append(headNewText, closeNew);

        headNew.onmousedown = onMouseDown;
        headNew.onmouseup = onMouseUp;
         headNew.onmousemove = onMouseMove;
        headNew.onmouseout = onMouseOut;

   

        headNewText.textContent = "New Window";

        rootWindow.className = "window";
        headNew.className = "head";
        bodyNew.className = "body";
        closeNew.className = "close";

        closeNew.onclick = CloseWindow;

        document.body.append(rootWindow)
    }


    createWindowBtn.onclick = createWindow;



   function onMouseDown(event){
       this.dataset.isMove = true;
       this.dataset.x = "" + event.clientX.datase;
       this.dataset.y = "" + event.clientX.datase;
       this.parentElement.style.zIndex = "" + (zIndex++);

   }

   function onMouseUp(event){
       this.dataset.isMove = false;
   }

    function onMouseOut(event){
      this.dataset.isMove = false;
    }

    function CloseWindow(event){
        let window = event.target.closest(".window")
        if(window){
            window.remove()
        }
    }

    function onMouseMove(event){
        if(this.dataset.isMove != "true")return;

        let win = this.parentElement
        let bound = win.getBoundingClientRect();
        win.style.top = "" +  (bound.top +(event.clientY - +this.dataset.y)) + "px"
        win.style.left = "" + (bound.left + (event.clientX - +this.dataset.x)) + "px"
        this.dataset.x = event.clientX;
        this.dataset.y = event.clientY;

    }







