const express = require('express');
const app = express();

app.get('/', (request, respones) => {
    response.send('hello world!')
})

app.listen(8080, () => console.log("listening on 8080"))
