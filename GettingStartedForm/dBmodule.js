// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gettingstartedform', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

exports.storeElement = (element) => {

  element.save(()=>{
    console.log("Successfully saved element in database!")
  })
  
}

const personSchema = new mongoose.Schema({
    name: String
  });

const Person = mongoose.model('Person', personSchema);

exports.createPerson = (name) => {

  var person = new Person({
    name: name 
   })

   return person

}