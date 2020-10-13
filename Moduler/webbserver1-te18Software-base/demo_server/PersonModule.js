const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({ 
    inName: String, //Ändrade name till inName för ökad klarhet
    inEmail: String, // Ändrade email till inEmail för ökad klarhet
    inAge: Number //Ändrade age till inAge för ökad klarhet
  });
  
  const Person = mongoose.model('Person', personSchema);

  exports.createPerson = (name, email, age) => {

    var person = new Person({
        inName: name, 
        inEmail: email, 
        inAge: age 
       })

       return person
}