const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser'); 

const port = 3000
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi')
})
app.post('/api/all', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})