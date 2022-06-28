# WeatherToInfluxDBJavaScript
A simple JavaScript/Node.js program that read local weather data from weather.gov and puts into an influxDB server

## Configuration
To configure the program, enter the env.js file and then modify the String values for the influxDB token, bucket, organization, and url. Furthermore, you'll need to find the correct Weather.gov url.
To that end, here's a [link](https://www.weather.gov/documentation/services-web-api) to the API's webiste. Figure out your local weather office and its gridX and gridY. You'll want the weatherURL to be in the format: "https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast/hourly".
## Building the Project
Use node app.js to start the app. To run in the background, I'd recommend using the & or the NPM package pm2.
