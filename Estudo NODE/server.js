import express from 'express'

const app = express()
app.use(express.json())

app.get('/usuarios/:id', (req, res) => {
    console.log(req)
    
    res.send("Rota de usuário")
})

app.post('/usuarios', (req, res) => {
    use.push(req.body)

    res.status(201).json({ message: 'Usuário criado com sucesso!' })

})

app.listen(3000)

