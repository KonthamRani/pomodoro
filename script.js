let minutes=24;
let seconds=59;
var interval=null;

function start(){
     interval=setInterval(
        ()=>{
            displayTime(minutes,seconds);
            
            if(minutes==0 && seconds==0)
            {
                alert(seconds)
                stop();
                alert("Time's up! Take a break!")
            }
            else if(seconds==0)
            {
                seconds=59;
                minutes--;
            }
            seconds--;
        }
        ,1000)
    
}
function stop(){
    clearInterval(interval);
}
function reset(){
    stop();
    minutes=24;
    seconds=59;
    displayTime(25,"00")

}
function displayTime(minutes,seconds){
    document.getElementById('display').innerText=`${minutes}:${seconds}`
}