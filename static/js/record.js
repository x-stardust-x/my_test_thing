let x=0;
let output=document.getElementById("output");
let meter=document.getElementById("meter_h");

function plus() {
    if(x>=10){
        return false;
    }
    else{
        x++;
        if(x>=7){
            meter.style.background = "red";
            meter.style.filter = "drop-shadow(0px 0px 5px red) drop-shadow(0px 0px 10px red)"
            console.log(meter.style.filter);
        }
        output.innerText = x;
        meter.style.height= x*30 + "px";
    }
}

function minus() {
    if(x<=0){
        return false;
    }
    else{
        x--;
        if(x<7){
            meter.style.background = "greenyellow";
            meter.style.filter = "drop-shadow(0px 0px 5px greenyellow) drop-shadow(0px 0px 10px greenyellow)"
        }
        output.innerText = x;
        meter.style.height= x*30 + "px";
    }
}