require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const data = [{
    id: 1,
    name: 'Luxmi',
    gender: 'female'
    },
    {
      id: 2,
      name: 'Lia',
      gender: 'female'
      },
      {
        id: 3,
        name: 'Liam',
        gender: 'male'
        },
        {
          id: 4,
          name: 'Lola',
          gender: 'female'
          },
          {
            id: 5,
            name: 'Lakshay',
            gender: 'male'
            },
    
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('luxmi');
})

app.get('/login', (req,res) => {
    res.send('<h1> Welcome to the login page<h1/>')
})

app.get('/api/data',(req, res) => {
    res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})