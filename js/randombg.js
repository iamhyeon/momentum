const images = ["img/0.jpg", "img/1.jpg.", "img/2.jpg","img/3.jpg","img/4.jpg"];
const boarderI = document.querySelector("#boarderI")
const toDoI = document.querySelector("#toDoI")
const body = document.querySelector("body");


function bgChange() {
    const bgNum = Math.floor(Math.random() * images.length);
    bgimg = "img/"+bgNum+".jpg";
    body.style.backgroundImage = "url('" + bgimg + "')";
    if(bgNum===0||bgNum===2){
        body.style.color = "grey";
    } else {
        body.style.color = "white";
    }
}

bgChange();
setInterval(bgChange,60000);