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


// --- MY SQL CONNECT ---

const con = mysql.createConnection({
    host: "localhost",
    user: "database",
    password: "",
    database: "mystore",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// --- ROUTING part ---
// All records from data base routing

app.get('/crystals', (req, res) => {
    const sql = `
        SELECT *
        FROM crystals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


// CRUD parts
// Add new item

app.post('/crystals', (req, res) => {
    const sql = `
        INSERT INTO crystals
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

// Edit item

app.put('/crystals/:id', (req, res) => {
    const sql = `
        UPDATE crystals
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

// delete item

app.delete('/crystals/:id', (req, res) => {
    const sql = `
        DELETE FROM crystals
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//  FILTER< SORT< SEARCH
// Randa visus skirtingus pagal pavadynima "product"" is crystalu domenu bazess

app.get('/crystals-product', (req, res) => {
    const sql = `
        SELECT DISTINCT product
        FROM crystals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Filter - rodo tik tam tikra "product" is crystalu domenu bazess

app.get('/crystals-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM crystals
        WHERE product = ?
    `;
    console.log(req.query.s);
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// paieska pagal pavadynima arba raktini zodi

app.get('/crystals-product', (req, res) => {
    const sql = `
        SELECT *
        FROM crystals
        WHERE product LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})




app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
})