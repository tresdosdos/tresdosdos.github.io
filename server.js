const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/app-store'));


app.listen(process.env.PORT || 5000);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname +'/dist/app-store/index.html'));
});

console.log('Console listening on port ' + process.env.PORT);
