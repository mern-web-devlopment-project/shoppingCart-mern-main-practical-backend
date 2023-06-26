const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3500;

app.get('/', (req,res) => {
  res.send("Working")
} )
app.listen(PORT,() => console.log(`http://localhost:${PORT}`))