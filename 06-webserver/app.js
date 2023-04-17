const express = require('express')
require('dotenv').config()
const hbs = require('hbs')
const app = express()
const PORT = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/generic', (req, res) => {
    res.render('generic')
})

app.get('/elements', (req, res) => {
    res.render('elements')
})

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))