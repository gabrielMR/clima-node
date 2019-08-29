const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=44f90beb8a8ee4bf8864583ba8925a0b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}