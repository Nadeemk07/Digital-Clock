var inc = 1000;

clock();

function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 12) % 12 + 1);

    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

function showDate() {
    var date = new Date();
    let d = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let output = d + "/" + month + "/" + year;
    document.getElementById("demo1").innerHTML = output;
}

var timer;
function startTime() {
    timer = setInterval(updateTime, 1000);

    function updateTime() {
        document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();

    }
}
function stopTime() {
    clearInterval(timer);
}
