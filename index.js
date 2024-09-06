const express = require('express');
const app = express();


app.get('/exercicio1', (req, res) => {
    const num1= req.query.num1
    const num2= req.query.num2

    res.json({ Soma: "Resultado"});
});


app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
}); 