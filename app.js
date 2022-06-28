const fetch = require ('node-fetch');
const cron = require('node-cron');
const {InfluxDB, Point} = require('@influxdata/influxdb-client');
const {url, token, org, bucket,region,weather_API_URL} = require('./env')

const influxDB = new InfluxDB({url, token})

async function test(){
    var writeApi = influxDB.getWriteApi(org, bucket)
    writeApi.useDefaultTags({region: region})

    var response = await fetch(weather_API_URL);
    var data = await response.json();
    console.log(data.properties.periods[0].temperature);
    console.log(data.properties.periods[0].windSpeed);
    const point1 = new Point('temperature')
    .floatField('value', data.properties.periods[0].temperature)
  
    console.log(` ${point1}`)
    writeApi.writePoint(point1)

    const point2 = new Point('wind')
    .floatField('value', data.properties.periods[0].windSpeed)
    console.log(` ${point2}`)
    writeApi.writePoint(point2)

    writeApi.close().then(() => {
        console.log('WRITE FINISHED')
      })
}

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
    test();
    console.log('running a task every minute');
  });