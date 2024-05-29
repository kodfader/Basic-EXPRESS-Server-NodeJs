const express = require('express')
const app = express()


// You can change the PORT number as needed
const PORT= 3000

// Middleware to parse JSON bodies
app.use(express.json())

// Basic route
app.get('/', (req , res) => {
    
    res.send('Hello world')
})


// Route with parameters
app.get('/hello/:name', (req , res) => {

    res.send('Hello there ' +  req.params.name + ' and welcome to our website\n date and time today are ' + new Date().toLocaleString())
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })


