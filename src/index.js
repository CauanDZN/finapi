const express = require('express');

const app = express();

app.use(express.json());

app.get("/coursers", (request, response) => {
    return response.json({message: "Hello World!"});
})

app.listen(3031);