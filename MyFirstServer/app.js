const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))