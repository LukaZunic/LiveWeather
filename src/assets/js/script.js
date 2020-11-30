import './config.js'


let city = document.getElementById('city');
city.addEventListener('keyup', (event)=>{
    if(event.key == 'Enter'){
        $.getJSON(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=${config.APIkey}` 
            ,(data)=>{
                console.log(data);
                document.getElementById("test").innerHTML = data.coord.lat;
            }
        );
        
    } 
})




