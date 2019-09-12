const express = require('express');
const app = express();

app.get('/', (req, res) => {

var str ='';
for (var i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    str += "<p>" + i + "soy par! </p>";
  }else {
    str += "<p>" + i + "soy impar! </p>";
  }
}res.send(str);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
