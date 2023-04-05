const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up API routes
app.use("/", route)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});