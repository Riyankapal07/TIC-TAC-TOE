console.log("Tic Tac Toe");
let turn="X";   // initial var X
let gameover=false;
// function to change turn
const changeturn = ()=>{          
    return turn==="X"?"0":"X";       // if turn=x then return 0 else return x
}

//function to check win
const win=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let w=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    w.forEach(e=>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
             document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " Won";
             gameover=true;
             document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='170px';
             document.querySelector(".line").style.width = "20vw"
             document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
         }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{                    //event listener
    let e=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(e.innerText===''){
            e.innerText=turn;
            turn=changeturn();
            win();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
            
        }
    })
})

// add on click listener to reset button
reset.addEventListener('click',()=>{
    let e=document.querySelectorAll('.boxtext');
    Array.from(e).forEach(ele=>{
        ele.innerText="";
    })
    turn="X";
    gameover=false;
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='0px';
})