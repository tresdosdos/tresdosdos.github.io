const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist'));


app.listen(process.env.PORT || 5000);

app.get("/*", function (req, res) {
  res.sendFile(path.join('/dist/app-store/index.html'));
});

console.log('Console listening on port ' + process.env.PORT);
