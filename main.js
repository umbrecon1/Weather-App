function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementsById("cityName");
    cityName.innerHTML ="=="+newName.value+"--"
}

fetch