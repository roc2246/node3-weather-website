const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e87ec56ead2f1c811753ab3d31c3e03b&query='+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'&units=f'
   
    request({url: url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees out. ' + 'It feels like ' + body.current.feelslike +' degrees out.')
        } 
    })
}

module.exports = forecast
