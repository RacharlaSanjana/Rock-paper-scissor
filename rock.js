const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scissor=document.querySelector("#scissor")
const user=document.querySelector("#userscore")
const computer=document.querySelector("#computerscore")
const playto= document.querySelector("#playto");
const reset= document.querySelector("#reset");
let result= document.getElementById("result")
let content= document.getElementById("con")
userscore=0
computerscore=0
let winnings=1
let isGameOver=false;
rock.addEventListener("click",function()
{
     if (!isGameOver)
     {
     let win=Math.floor(Math.random()*3)+1;
     if(win===3)
     {
          content.innerHTML="Rock beats Scissor"
          userscore+=1
          user.textContent=userscore; 

     }
     else if(win===2)
     {
          content.innerHTML="Paper beats Rock"
          computerscore+=1;
          computer.textContent=computerscore;
     }
     else
     {
          content.innerHTML="Both are Rocks"
     }
     }
     check();
}
)
paper.addEventListener("click",function()
{
     if (!isGameOver)
     {
     let win=Math.floor(Math.random()*3)+1;
     if(win===1)
     {
          content.innerHTML="Paper beats Rock"
          userscore+=1
          user.textContent=userscore;
     }
     else if(win===3)
     {
          content.innerHTML="Scissor beats Paper"
          computerscore+=1
          computer.textContent=computerscore;
     }
     else
     {
          content.innerHTML="Both are Papers"
     }
}
check();
}
)
scissor.addEventListener("click",function()
{
     if (!isGameOver)
     {     
          let win=Math.floor(Math.random()*3)+1;
          if(win===2)
          {
          content.innerHTML="Scissor beats Paper"
          userscore+=1
          user.textContent=userscore;
     }
     else if(win===1)
     {
          content.innerHTML="Rock beats Scissor"
          computerscore+=1;
          computer.textContent=computerscore;
     }
     else
     {
          content.innerHTML="Both are Scissors"
     }
}
check();
}
)
function check()
{
     if((winnings===userscore)||(winnings===computerscore))
     {
     isGameOver=true;
       rock.disabled=true;
       paper.disabled=true;
       scissor.disabled=true;
       if(winnings===userscore)
       {
          user.classList.add('has-text-success');
         computer.classList.add('has-text-danger');
         result.innerHTML="User won the Game 🔥";
       }
       else
       {
          computer.classList.add('has-text-success');
          user.classList.add('has-text-danger'); 
          result.innerHTML="Computer won the Game 😢"; 
       }
     }
}
reset.addEventListener('click',resettt);
function resettt()
{
    {
        isGameOver=false;
        userscore=0;
        computerscore=0;
        winnings=1;
        user.textContent=userscore;
        computer.textContent=computerscore;
        user.classList.remove('has-text-success','has-text-danger');
        computer.classList.remove('has-text-success','has-text-danger');
        rock.disabled=false;
        paper.disabled=false;
        scissor.disabled=false;
        result.innerHTML="Try your Luck 🤞🤞";
        content.innerHTML="";
    }
}
