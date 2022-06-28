/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'INFLUXDB IP Goes Here'

const token = process.env['INFLUX_TOKEN'] || 'API Token Goes Here'

const org = process.env['INFLUX_ORG'] || 'Org name here'

const bucket = 'Bucket Name Here'
const region = 'Name of Region'
const weather_API_URL = 'weather.gov/... goes here'

module.exports = {
  url,
  token,
  org,
  bucket,
  region,
  weather_API_URL,
}
