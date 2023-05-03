const express = require('express');
const app = express();
app.use(express.static('public'))

// Route
app.get('/home', (request, response)=>{
    response.sendFile(__dirname + '/views/home.html');
});

// Second Route
app.get('/schools', (request, response)=>{
    response.sendFile(__dirname + '/views/schools.html');
});

// Third Route
app.get('/books', (request, response)=>{
    response.sendFile(__dirname + '/views/books.html');
});

app.listen(3000, ()=> console.log('Port 3000'));