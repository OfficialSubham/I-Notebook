const connectToMongo = require("./db")
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

//Available routes

app.use("/", require("./routes/auth"))
app.use("/blog", require("./routes/blog"))

// app.get('/', (req, res) => {
//   res.send('Hello I am Subham')
// //   console.log(res);
// })

app.listen(port)