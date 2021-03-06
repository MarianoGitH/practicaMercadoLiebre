const express = require('express');
const app = express();
const  port = 3000;
const path = require('path');

// Views
const views = path.join(__dirname, 'views/');

// Public
const public = path.join(__dirname, 'public/');

// HTTP routes
const httpRaiz = '/';
const httpHome ='/home';
const httpLogin ='/login';
const httpRegister ='/register';
const httpCart = '/cart';


// HTML
const homeHtml = 'home.html';
const loginHtml = 'login.html';
const registerHtml = 'register.html';
const cartHtml = 'cart.html';

// Define the static file path
app.use(express.static(__dirname + '/public/'));

app.get(httpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpHome, (req,res) =>{
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpLogin, (req,res) =>{
    res.sendFile(path.join(views, loginHtml))
})

app.get(httpRegister, (req,res) =>{
    res.sendFile(path.join(views, registerHtml))
})

app.get(httpCart, (req,res) =>{
    res.sendFile(path.join(views, cartHtml))
})
app.listen(port, () =>{
    console.log(`Example app listenig at http://localhost:${port}`)
    console.log(__dirname)
})