const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')


const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

app.get('/:id', (req, res)=>{
   //TO REDIRECT TO URL
})

app.post('/url', (req, res)=>{
   // TO CREATE A SHORT URL
})

app.get('/url/:id', (req, res)=>{
   // TO GET A SHORT URL BY ID

})




const port = process.env.PORT || 1337
app.listen(port, ()=>{
    console.log(`server is listening on  port ${port}. . .`);
}) 