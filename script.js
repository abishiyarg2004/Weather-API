function display()
{
    var city = document.getElementById("city").value;
    var apikey='d8d45f9f8db68cdc0a068a451902a120';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey +'&units=metric')
    .then(Response => Response.json())
    .then(data => {
        var t = data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}