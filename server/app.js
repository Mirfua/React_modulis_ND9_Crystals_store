const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "database",
    password: "",
    database: "mystore"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Routing
app.get('/test', (req, res) => {
    res.send(JSON.stringify({ test: 'OK' }))
})


// Visi kristalu domenys

app.get('/jewelry', (req, res) => {
    const sql = `
        SELECT *
        FROM jewelry
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


// Prideti nauja crystala
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/jewelry', (req, res) => {
    const sql = `
        INSERT INTO jewelry
        (product, quantity, price, last_order)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.last_order
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Crystalu redagavimas
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/jewelry/:id', (req, res) => {
    const sql = `
        UPDATE animals
        SET product = ?, quantity = ?, price = ?, last_order = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.body.last_order,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Trina gyvuna
// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/jewelry/:id', (req, res) => {
    const sql = `
        DELETE FROM jewelry
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


















app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
})