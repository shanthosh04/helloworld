const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/name', (req, res) => {
    res.json({ message: 'hello shanthosh'});
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})