
const express = require('express');
const app = express();

var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });
mongoose.connection.on("error", function(e) { console.error(e); });

// definimos el schema
var schema = mongoose.Schema({
date: { type: Date, default: Date.now  },
name: { type: String, default: "Anonimo"  },

});
// definimos el modelo
var Visitor = mongoose.model("Visitor", schema);

app.get('/', (req, res) => {

var first = new Visitor({ name: req.query.name });
first.save(function(err) {
if (err) return console.error(err);
});

res.send('<h1>El vistante fue almacenado con exito!</h1>');


});



app.listen(3000, () => console.log('Listening on port 3000!'));

/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {

var str ='';
for (var i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    str += "<p>" + i + " Soy Par! </p>";
  }else {
    str += "<p>" + i + " Soy Impar! </p>";
  }
}res.send(str);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
*/
