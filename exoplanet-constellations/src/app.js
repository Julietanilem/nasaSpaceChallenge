import express from 'express'
import {pool} from './db.js'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT hello word as result')
    console.log(result)
    res.json(result[0])
    res.send('Hello World!')
})


app.listen(3000)
console.log('Server running on http://localhost:3000')

