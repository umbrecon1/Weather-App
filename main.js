function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementsById("cityName");
    cityName.innerHTML ="=="+newName.value+"--"
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    