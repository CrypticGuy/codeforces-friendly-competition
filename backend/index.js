const express  = require('express')
const cors     =  require('cors')
const mongoose = require('mongoose')
const app      = express()
const port     = 5000
var update     = require('./routes/update')
var create     = require('./routes/create')

require('dotenv').config();

var mongoDB = process.env.MONGO_DB_URL
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected!")
});

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/update', update)
app.use('/create', create)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
