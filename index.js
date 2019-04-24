const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// permite ao express saber lidar com dados provenientes de um formulario
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5']

// rota principal
app.get('/', (req, res) => {
  return res.render('list', { users })
})

// rota para cadastro de novo usuario
app.get('/new', (req, res) => {
  return res.render('new')
})

// create
app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
