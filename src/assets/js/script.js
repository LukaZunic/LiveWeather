
let city = document.getElementById('city');
city.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        cityName = city.value;
    }
})

$.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${config.APIkey}`,
    function(data){
        console.log(data);
    }
);




