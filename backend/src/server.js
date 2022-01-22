const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', async(request, response) => {
  try {
    const responseApi = await axios('https://jsonplaceholder.typicode.com/posts')

    return response.json(responseApi.data)
  } catch(err) {
    console.log(err)
  }
})

app.listen('3333')