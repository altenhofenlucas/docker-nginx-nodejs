const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'app',
    password: 'app',
    database: 'app'
})

const personName = "Lucas Altenhofen"
connection.query(`INSERT INTO people(name) VALUES('${personName}');`)

const app = express()

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people;', (err, result, fields) => {
        res.send(`<h1>Full Cycle Rocks!</h1><br><ul>${result.map(person => `<li>${person.name}</li>`)}</ul>`)
    })    
})

app.listen(3000, () => console.log('Server is up!'))
