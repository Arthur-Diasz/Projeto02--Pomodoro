var sec=00
var min=00
var interval



function start(){
   var sec= 00
   min= 25
    interval= setInterval(watch,1000)
}

function short(){
    interval= setInterval(watch,1000)
    min=5
    sec= 00
    document.getElementById('watch').innerText=min+':'+sec
}

function long(){
    interval= setInterval(watch,1000)
  min=15
  sec= 00
  document.getElementById('watch').innerText=min+':'+sec
}


function watch(){
    sec--
    if(sec==60) {
    min--
    sec=0
    }
   document.getElementById('watch').innerText=min+':'+sec

}
  