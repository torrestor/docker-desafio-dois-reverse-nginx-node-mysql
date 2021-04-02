const express = require('express')
const app = express()
const port = 8888

app.get('/', function (req, res, next) {
        res.send('ola');
});

/*********************************************
*Porta                                       *
*********************************************/
app.listen(port, () => {
    console.log('Executando na porta ' + port)
})

