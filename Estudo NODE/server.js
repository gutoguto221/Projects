import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('Bem-vindo à rota de usuários!')
})

app.listen(3000)

