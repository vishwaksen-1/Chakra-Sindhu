var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Sample turbine details (replace with your actual turbine data)
var turbineDetails = {
  name: 'Wind Turbine 1',
  direction: 'North',
  speed: '15 m/s',
  yawError: '5 degrees',
  rpm: '120',
  runningStatus: 'Running',
};

app.get('/', (req, res) => {
  res.render('index', { turbine: turbineDetails });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});