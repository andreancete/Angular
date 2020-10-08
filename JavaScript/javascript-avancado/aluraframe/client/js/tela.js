//querySelector pega a informação da pagina pelo id
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor') 
];

//pega a table a tribui na variavel tbody
var tbody = document.querySelector('table tbody');

//intercepta o evento de sumit que é utilizado quando clicamos no botão de submit
document.querySelector('.form').addEventListener('submit', function(event) {

    //intercepta o evento de sumit e evita resetar a pagina perdendo toda a informação
    event.preventDefault();

    //cria um novo elemento linha da tabela no DOM (pagina)
    var tr = document.createElement('tr');

    //para cada informação dos campos da tela cria um cada campo como novo elemento coluna para adicionar na tabela
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        //adiciona a nova coluna na linha do grid
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    //adiciona a nova coluna na linha do grid
    tr.appendChild(tdVolume);

    //adiciona na tabela a linha criada
    tbody.appendChild(tr);
    
    //zera os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //foca  novamente no primeiro campo
    campos[0].focus();

});