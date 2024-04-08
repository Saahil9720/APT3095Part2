const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Set the directory that contains the HTML file as a static resource
app.use(express.static(path.join(__dirname)));

// Redirect the root to index.html explicitly (not needed if index.html is to be the default served file)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
