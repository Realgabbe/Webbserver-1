const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

const personSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Person = mongoose.model('Person', personSchema);

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))    

app.get('/kiss', (req, res) => {
  res.sendFile(clientDir + 'DeepPurple_elev.css')
})

app.get('/dp', (req, res) => {
    res.sendFile(clientDir + 'dp.png')
  })  

app.get('/inrock', (req, res) => {
   res.sendFile(clientDir + 'inrock.jpg')
})  

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))