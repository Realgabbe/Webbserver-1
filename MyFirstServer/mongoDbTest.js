// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

personSchema.methods.speak = (parens) => {
  console.log("Hej!");

  console.log(`My name is` + this.name);
};

const Person = mongoose.model('Person', personSchema);

const gabbe = new Person ({ name: 'Gabbe', age: 5});
const davidr = new Person ({ name: 'David R', age: 8});
const hugo = new Person ({ name: 'Hugo', age: 12});
const davidu = new Person ({ name: 'David U', age: 9});
const jacob = new Person ({ name: 'Jacob', age: 3});

gabbe.save;
davidr.save;
hugo.save;
davidu.save;
jacob.save;

//const silence = new Kitten({ name: 'Silence' });
//console.log(silence.name); // 'Silence'
//
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
//kittySchema.methods.speak = function () {
//    const greeting = this.name
//      ? "Meow name is " + this.name
//      : "I don't have a name";
//    console.log(greeting);
//  }
  
//const Kitten = mongoose.model('Kitten', kittySchema);

//const fluffy = new Kitten({ name: 'fluffy' });
//fluffy.speak(); // "Meow name is fluffy"

//fluffy.save(function (err, fluffy) {
//    if (err) return console.error(err);
//    fluffy.speak();
//  });

//Kitten.find(function (err, kittens) {
//    if (err) return console.error(err);
//    console.log(kittens);
//})

//Kitten.find({ name: /^fluff/ }, callback);