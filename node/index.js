const express = require('express')
const app = express()
const port = 8888

/*********************************************
 * Configura acesso ao banco desafio_db_node *
 *********************************************/
 const config = {
    host:'desafio2_mysqlDb',
    user:'root',
    password:'root',
    database:'desafio_db_node'
};
/*********************************************
* conectar                                   *
*********************************************/
const mysql = require('mysql')
const conn = mysql.createConnection(config)
/*********************************************
* insert                                     *
*********************************************/
const sql = `insert into people (name) values ('Scooby Doo')`
conn.query(sql)
conn.end()

/*********************************************
*Lista                                       *
*********************************************/
app.get('/', function (req, res, next) {
    const mysql = require('mysql')
    const conn = mysql.createConnection(config)
    const sqlConsulta = 'select id, name from people order by id';
    conn.query(sqlConsulta, (err, linhas, fields) => {
        if(err) 
            throw err;
        
        conteudo = '<h1>Full Cycle Rocks!!!!</h1>';
        conteudo += '<table><tr><td>Código</td><td>Nome</td></tr>';
        linhas.forEach(function(linha, i) {
            conteudo +=  '<tr><td>';
            conteudo += linha.id;
            conteudo +='</td><td>';
            conteudo += linha.name;
            conteudo += '</td></tr>';
        })
        conteudo +=  '</table>';
        res.send(conteudo);
    });    
    conn.end();
});
/*********************************************
*Olá
*********************************************/
app.get('/ola', function (req, res, next) {
    res.send('ola');
});
/*********************************************
*Porta                                       *
*********************************************/
app.listen(port, () => {
    console.log('Executando na porta ' + port)
})

