$(document).ready(function () {
    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var key = '6507f13bae5e9a8e2a123874954c0f3e';

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {
                q: city,
                appid: key,
                units: 'metric'
            },
            success: function (data) {
                var weatherInfo = '';

                $.each(data.weather, function (index, val) {
                    weatherInfo += '<h1><b>' + data.name + '</b></h1>' +
                        '<h3>Temperature: ' + data.main.temp + '&deg;C</h3>' +
                        '<h3>Description: ' + val.description + '</h3>';
                });

                $("#showWeatherForecast").html(weatherInfo);
            }
        });
    });
});
