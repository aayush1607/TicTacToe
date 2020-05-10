//html

const status= document.querySelector('.status');
const reset= document.querySelector('.reset');
const cells= document.querySelectorAll('.gamecell');

const symbolize=(x)=>x==='x'?'x':'O';

// game
 let gameon=true;
 let xnext= true;
 let winner=null;

 const updateWin=(win)=>{
    gameon=false;
    winner=win;
    if(winner=='x')
    status.innerHTML=`${symbolize(win)} has won!!!`;
    else{
       status.innerHTML=`<span>${symbolize(win)}</span> has won!!!`;

    }
 }
 const gameStatus=()=>{

     const one=cells[0].classList[2];
     const two=cells[1].classList[2];
     const three=cells[2].classList[2];
     const four=cells[3].classList[2];
     const five=cells[4].classList[2];
     const six=cells[5].classList[2];
     const seven=cells[6].classList[2];
     const eight=cells[7].classList[2];
     const nine=cells[8].classList[2];
     //checkwin

     //rows

     if(one && one=== two && one===three){
         updateWin(one);
         cells[0].classList.add("won");
         cells[1].classList.add("won");
         cells[2].classList.add("won");
     }
     else if(four && four=== five && four===six){
        updateWin(four);
        cells[3].classList.add("won");
        cells[4].classList.add("won");
        cells[5].classList.add("won");
    }
     else if(seven && seven=== eight && seven===nine){
        updateWin(seven);
        cells[6].classList.add("won");
        cells[7].classList.add("won");
        cells[8].classList.add("won");
    } 

    //columns

     else if(one && one=== four && one===seven){
        updateWin(one);
        cells[0].classList.add("won");
        cells[3].classList.add("won");
        cells[6].classList.add("won");
    }
     else if(two && two=== five && two===eight){
        updateWin(two);
        cells[1].classList.add("won");
        cells[4].classList.add("won");
        cells[7].classList.add("won");
    }
     else if(three && three=== six && three===nine){
        updateWin(three);
        cells[2].classList.add("won");
        cells[5].classList.add("won");
        cells[8].classList.add("won");
    }

    //diagonals

     else if(one && one=== five && one===nine){
        updateWin(one);
        cells[0].classList.add("won");
        cells[4].classList.add("won");
        cells[8].classList.add("won");

    }
     else if(three && three=== five && three===seven){
        updateWin(three);
        cells[2].classList.add("won");
        cells[4].classList.add("won");
        cells[6].classList.add("won");
    }
     else if(one && two && three && four && five && six && seven && eight && nine )
     {
         gameon=false;
         status.innerHTML='Draw <span>xoxoxo</span>!!!';
         cells[0].classList.add("won");
         cells[1].classList.add("won");
         cells[2].classList.add("won");
         cells[3].classList.add("won");
         cells[4].classList.add("won");
         cells[5].classList.add("won");
         cells[6].classList.add("won");
         cells[7].classList.add("won");
         cells[8].classList.add("won");
     }
     else{
        xnext=!xnext; 
        if(xnext)
        {
            status.innerHTML=`${symbolize('x')} is next`;

        }
        else
        {
            status.innerHTML=`<span>${symbolize('o')}</span> is next`;
        }
     }


 }

 // event handle

 const  handleReset=(e) =>{
    
     console.log(e);
     status.innerHTML=`${symbolize('x')} is next`;
     xnext=true;
     gameon=true;
     for(const i of cells)
     {
        i.classList.remove('x');
        i.classList.remove('o');
        i.classList.remove("won");
     }
  
 }

 const handleCell=(e)=>{
     const classList=e.target.classList;
     const location =classList[1];

     if(classList[2]==='x' || classList[2]==='o' || gameon===false)
     {
         return;
     }


     if(xnext){
        classList.add('x');
        gameStatus();
        
        
        }

     else{
         classList.add("o");
         gameStatus();
        

     }
 }

 // event listen
 reset.addEventListener('click',handleReset)

 for(const i of cells){
     i.addEventListener('click',handleCell)
 }
 