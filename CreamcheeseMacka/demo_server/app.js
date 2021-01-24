const express = require('express')
const dBModule = require('./dBModule')
const PersonModule = require('./PersonModule')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")
})

app.get('/products', (req, res) => {
  res.sendFile(clientDir + "products.html")
})

app.get('/services', (req, res) => {
  res.sendFile(clientDir + "services.html")
})

app.get('/contact', (req, res) => {
  res.sendFile(clientDir + "contact.html")
})

app.get('/obamosabebesite', (req, res) => {
  res.sendFile(clientDir + "obamosabebe.html")
})

app.get('/stefansite', (req, res) => {
  res.sendFile(clientDir + "stefan.html")
})

app.get('/hoangsite', (req, res) => {
  res.sendFile(clientDir + "hoang.html")
})

app.get('/bootstrapcss', (req, res) => {
  res.sendFile(clientDir + "bootstrap/css/bootstrap.css")
})

app.get('/bootstrapjs', (req, res) => {
  res.sendFile(clientDir + "bootstrap/js/bootstrap.js")
})

app.get('/extraclassescss', (req, res) => {
  res.sendFile(clientDir + "extra_classes.css")
})

app.get('/hoangpic', (req, res) => {
  res.sendFile(clientDir + "hoang.png")
})

app.get('/slavmainpic', (req, res) => {
  res.sendFile(clientDir + "slavmain.jpg")
})

app.get('/obamospic', (req, res) => {
  res.sendFile(clientDir + "obamos.jpg")
})

app.get('/stefanpic', (req, res) => {
  res.sendFile(clientDir + "stefanimpersonator.jpg")
})

app.get('/boatpic', (req, res) => {
  res.sendFile(clientDir + "boat.jpg")
})

app.get('/trainpic', (req, res) => {
  res.sendFile(clientDir + "thomastrain.jpg")
})

app.get('/planepic', (req, res) => {
  res.sendFile(clientDir + "planeface.JPG")
})

app.post('/', (req, res) => {
  
  let person = PersonModule.createPerson(req.body.name, req.body.email, req.body.age)
  
  dBModule.storeElement(person)

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
