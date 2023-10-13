
const express = require('express');
const port = 3000
const BodyParser = require('body-parser')
const app = express();
const fs = require('fs');

var router = require('./routes/index');
app.use("/apis", router);


//==============================================================
// Exercise 01
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//==============================================================
// Exercise 02
app.get('/overview', (req, res) => {
    res.send('<h1>This is overview page</h1>');
});

app.get('/product', (req, res) => {
    res.send('<h1>This is product page</h1>');
});

app.use((req, res) => {
    res.status(404).send('<h1>PAGE NOT FOUND</h1>');
});


//==============================================================
// Exercise 03


app.listen(port, () => {
    console.log(`App đã lắng nghe tại cổng ${port}`)
})
