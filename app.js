const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(`El clima de ${coords.dir} es de ${temp}`);
    } catch (e) {
        console.log(`No se pudo obtener el clima de ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);