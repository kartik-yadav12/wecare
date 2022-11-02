const express = require("express")
const app = express()
const path = require("path");
const staticPath = path.join(__dirname + "/static" );
console.log( path.join(__dirname  ))
const bodyParser = require('body-parser');
app.use(express.static(staticPath ));

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
   res.sendFile(staticPath)
})
app.get("/register", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/static/reg.html"));
 })
app.get("/login1", (req, res) => {
    
    res.sendFile( res.sendFile(staticPath));
 })
app.get("/fertility", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/static/women.html"));
 })
app.get("/health", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/static/main.html"));
 })
app.get("/midwife", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/static/cv.html"));
 })
app.get("/help", (req, res) => {
    
    res.sendFile(path.join(__dirname + "/static/help.html"));
 })

app.listen(PORT, () => {
    console.log("successfully working on port 3000");
})