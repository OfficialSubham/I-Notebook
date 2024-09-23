const connectToMongo = require("./db")
const express = require('express')
const cors = require("cors")
connectToMongo();
const app = express()
const port = 5000
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    allowedHeaders: ['Content-Type', 'auth-token']
  };
app.use(cors())
app.use(express.json(corsOptions))
//Available routes

app.use("/", require("./routes/auth"))
app.use("/blog", require("./routes/blog"))

// app.get('/', (req, res) => {
//   res.send('Hello I am Subham')
// //   console.log(res);
// })

app.listen(port)