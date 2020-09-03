const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
app.use(express.static('public')); // pasta onde estarao os arquivos esticos css
app.set('view engine','ejs');

console.log(`serving ${www}`);

var produtos = [
    {id:1,nome:'coca cola',preco:1.50},
    {id:2,nome:'fanta',preco:1.80},
];

app.get('/:nome', (req, res) => {
    const lingua='portugues';
    res.render(`index`, { root: www,nome:req.params.nome,lingua:lingua,produtos:produtos});
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

