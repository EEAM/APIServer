const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/HelloWorld', (req, res) => {

  if(!(req.body.numberA && req.body.numberB)) 
    return res.status(400).send("Number A or/and B are missing in the Payload!")
  
  const numberA = req.body.numberA  
  const numberB = req.body.numberB  
  const produkt = numberA*numberB
  res.status(200).send(`Result of multiplicatopn ${produkt}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})