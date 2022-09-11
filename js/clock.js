const clock = document.querySelector("#clock");

function currentTime() {
    const date = new Date(); 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    const time = `${hours} : ${minutes} : ${seconds}`;
  
    clock.innerText = `${time}`;
  };
  
currentTime();
setInterval(currentTime,1000);