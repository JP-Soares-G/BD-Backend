const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {

    const produtos = [
        {
            id: 1,
            name: "Camisa",
            category: "Roupa"
        },
        {
            id: 1283,
            name: "Notebook",
            category: "Tecnologia"
        },
    ]
    res.json({produtos})
})

app.get('/:id', (req, res) => {
    const camisa = {
        id: 1,
        name: 'Camisa',
        category: 'Roupa',
        amount: 10,
        media: 15.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem aliquid quibusdam dolor suscipit deserunt mollitia! Animi error rem maxime aperiam dolores odio minus assumenda, asperiores suscipit ducimus aliquid. Assumenda repellendus quam veniam? Atque in omnis cum perspiciatis id hic aut reiciendis, esse illum corrupti nostrum maiores, temporibus quae cupiditate blanditiis doloribus eum sed! Molestiae perspiciatis totam sapiente cum.'
    }

    const notebook = {
        id: 1283,
        name: 'Notebook',
        category: 'Tecnologia',
        amount: 25,
        media: 1300.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem aliquid quibusdam dolor suscipit deserunt mollitia! Animi error rem maxime aperiam dolores odio minus assumenda, asperiores suscipit ducimus aliquid. Assumenda repellendus quam veniam? Atque in omnis cum perspiciatis id hic aut reiciendis, esse illum corrupti nostrum maiores, temporibus quae cupiditate blanditiis doloribus eum sed! Molestiae perspiciatis totam sapiente cum.'
    }

    if(req.params.id === '1') return res.json(camisa)
    res.json(notebook)
})

const port = process.env.PORT || 3000

app.listen(port, console.log('Backend is running at port ' + port))