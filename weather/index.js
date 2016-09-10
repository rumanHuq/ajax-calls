$(function(){
    var Weather = {
        init: function(){
            this.getLatLong()
        },
        getLatLong: function(){
            var LatLong = $.ajax({
                url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDGbqEGgu-beMTAyQW0WorCVA8QymFmJfA',
                type: 'POST',
                success: function(data){
                    //console.log(data)
                    Weather.getWeather(data)
                } 
            });      
        },
        getWeather: function(LatLong){  
            var url = 'http://api.openweathermap.org/data/2.5/find?lat='+LatLong.location.lat+'&lon='+LatLong.location.lng+'&appid=a9ccbff347e72cd2c8fd7d61d5eabc27'
            $.ajax({
                url: url,
                type: 'GET',
                success: function(data){
                    for(var i in data.list){
                        //console.log(data.list[i])
                        if(data.list[i].name=='Helsinki') {
                            var celsius = data.list[i].main.temp - 273.15;
                            $('#weather').html(parseInt(celsius) + '° celsius')
                        }
                    }
                }
            });
        }
    };
    Weather.init()
}());