// vamos declarar a função "pesquisar" que eu criei lá no botão do html. Para isso, utilizamos "function"  com o nome que escolhemos lá no HTML. Os parenteses indicam que é uma função. Entre chaves colocamos tudo que queremos que aconteça

function pesquisar() {
    
// vamos criar uma variável, que chamaremos section para buscar um elemento ID lá do HTML por meio da "função" document

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa =  document.getElementById("campo-pesquisa").value //o JS não deixa criar variável com o mesmo nome do ID que eu criei na HTML porque ele tem um hifen. O padrão é usar o camelCase. Então criei variavel em camel case mas no document.getElementById fiz a referência ao ID que eu criei no html "campo-pesquisa". Ou seja, agora a ID campo-pesquisa, é uma variável chamada campoPesquisa no meu documento JS. Quando insiro o .value vai retornar o valor que eu digitar no campo (no console)

if (!campoPesquisa) {
    section.innerHTML = "<p> Você não digitou nada"
    return
}

// o codigo a seguir vai colocar tudo que eu digitar no campo pesquisa em minusculo
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""; // criei essa variavel, no momento vazia, para não ficar chamando o inner html muitas vezes, uma pra cada resultado
let titulo = "";
let descricao = "";


 // Para cada (for) dado dentro da lista de dados, queremos que...  (faremos uma repetição)

for (let dado of dados) {

    // coloco todos os meus dados em minusculo para não atrapalhar na hora da pesquisa caso eu não digite alguma letra maiscula conforme tá no arquivo de dados.js
    titulo = dado.titulo.toLowerCase();
    descricao = dado.titulo.toLowerCase();

    // a lógica que eu quero agora é: se titulo includes campoPesquisa, então faça... 
    // com o comando dado.titulo.includes(campoPesquisa), eu digo que quero incluir no resultado apenas o que estiver incluso no meu campoPesquisa (meu input)
    // obs: o || significa "ou"
   
    if(titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa))  {
        
        //cria um novo elemento 

        // ao colocar o += recebo no loop todos os dados do arquivo dados.jv. Se fosse só o =, receberíamos apenas um dos dados. Ex: só os dados de Melina

        resultados += ` 
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${dado.titulo} </a>
                       </h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href="${dado.link}"
                target="_blank"> Siga  no Instagram </a>
        </div>                
    `;
    }
}

if(!resultados) {
     
    resultados = "<p>Nada foi encontrado</p>"

};

 // vou fazer outra section.innerHTML (pq a primeira section.innerHTML eu substituí por onde tá "resultados += e a div acima) mas agora com a variavel resultado ( que eu criei inicialmente vazia lá em cima)

section.innerHTML = resultados;

}

