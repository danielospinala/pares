
const express = require('express');
const app = express();

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true, useUnifiedTopology: true });
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

res.send('<h1>El vistante fue almacenado con exito</h1>');


});



app.listen(3000, () => console.log('Listening on port 3000!'));
