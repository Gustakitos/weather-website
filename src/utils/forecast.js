const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ae3517ea1f3f2b32df04037c2321c200/'+latitude+','+longitude+'?units=si&lang=pt';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+ ' degrees out. The high today is a ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a '+body.currently.precipProbability+'% chance of rain.')
        }
    })

}

module.exports = forecast