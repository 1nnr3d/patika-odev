let username = prompt("Adınız nedir?");
function showTime(e){
    document.querySelector("#myName").textContent = username;
    let clock = document.querySelector("#myClock");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay()
    let days = {1:"Pazartesi", 2:"Salı", 3:"Carşamba", 4:"Perşembe", 5:"Cuma", 6:"Cumartesi", 7:"Pazar"}
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${days[day]}`
}
setInterval(showTime,1000)