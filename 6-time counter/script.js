var hour=0;
var mint=0;
var sec=0;
var count=0;

var timer=false;


function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;

}

function reset(){
    timer=false;
    hour=0;
    mint=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}


function stopwatch(){
    if(timer==true){

        count=count+1;

        if(count==100){
            sec=sec+1;
            count=0;
        }

        if(sec==60){
            mint=mint+1;
            sec=0;
        }

        if(min==60){
            hour=hour+1;
            min=0;
            sec=0;
        }

        var hrstring=hour;
        var mintstring=mint;
        var secstring=sec;
        var countstring=count;

        if(hour<10){
            hrstring= "0" + hrstring;
        }
        if(mint<10){
            mintstring= "0" + mintstring;
        }
        if(sec<10){
            secstring= "0" + secstring;
        }
        if(count<10){
            countstring= "0" + countstring;
        }

        document.getElementById("hr").innerHTML=hrstring;
        document.getElementById("min").innerHTML=mintstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("count").innerHTML=countstring;
        setTimeout("stopwatch()",10);
    }
}