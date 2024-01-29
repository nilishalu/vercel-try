// index.js
const express = require('express')
const path = require("path");
const app = express()
const PORT = 4000

app.use(express.static(path.join(__dirname, "/public")));

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "/views/index.html"))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app