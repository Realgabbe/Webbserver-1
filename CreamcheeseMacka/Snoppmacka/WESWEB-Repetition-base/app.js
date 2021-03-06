//Inkludera Express.js
const express = require('express')
//Inkludera dbModule.js
const dbModule = require('./dBModule')
//Inkludera MessageModel för att kunna spara meddelanden i databasen 
const MessageModel = require('./MessageModel')
//Gör en instans klassen express
const app = express()
//Ange porten som servern kommer att lyssna på.
const port = 3000

//Sökväg till sökväg till en mapp för alla statiska sidor och sätt den som default sökväg.
const staticDir = __dirname + '\\client\\'
app.use(express.static(staticDir))

//Sätt upp servern så att den kan tyda json och urlencoded
app.use(express.json())
app.use(express.urlencoded())

//Ställ in EJS som vymotor för servern. 
app.set('view engine' , 'ejs')

//Lyssnar på GET requests på addressen <domain>/
app.get('/', async (req, res) => {
  //rendera sidan index.ejs
  const messages = await MessageModel.getAllMessages();
  res.render('pages/index.ejs', { messages: messages});
});

app.get('/products', (req, res) => {
  res.render('pages/products.ejs')
})

app.get('/services', (req, res) => {
  res.render('pages/services.ejs')
})

app.get('/contact', (req, res) => {
  res.render('pages/contact.ejs')
})

app.get('/obamosabebesite', (req, res) => {
  res.render('pages/obamosabebe.ejs')
})

app.get('/stefansite', (req, res) => {
  res.render('pages/stefan.ejs')
})

app.get('/hoangsite', (req, res) => {
  res.render('pages/hoang.ejs')
})

//Lyssnar på POST requests på addressen <domain>/
app.post("/", async (req, res) => {
    //Skapa ett Message objekt
    const message = MessageModel.createMessage(req.body.email, req.body.message);
    //spara elementet Message i databasen
    await dbModule.storeElement(message);
    //Omdirigera klienten till huvudsidan
    res.redirect('/');
})

//Sätt igång servern så att den kan ta emot requests på vald port.
app.listen(port, () => console.log(`Example app listening on port ${port}!`))