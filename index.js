
document.getElementById("btn").onclick=gamestart


let colors = ["#b91c1c", "#f97316", "#f59e0b", "#22c55e", "#ec4899", "#06b6d4", "#0284c7", "#a21caf"];

function gamestart()
{
    document.getElementById("btn").style.display="none"
    let randomindex=Math.floor(Math.random()*8)
    document.getElementById("box").style.backgroundColor=colors[randomindex]
    let starttime=new Date().getTime()

    let leftshift=(Math.random()*400)
    let topshift=(Math.random()*400)

    
    document.getElementById("box").style.left=leftshift+"px"
    document.getElementById("box").style.top=topshift+"px"
    document.getElementById("box").onclick=function()
    {
      let endtime=new Date().getTime();
      let difference=endtime-starttime
      alert("you took "+difference)
      gamestart();
    };

}

