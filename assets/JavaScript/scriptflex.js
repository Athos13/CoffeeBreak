//Função Principal da mudança de fundo chamada pelo botão, que chama todas as outras

function mudaModo(){

    mudaClasses();
    mudaTextos();
    mudaFundo();
}

// Funções que mudam classe, texto e fundo 
function mudaClasses(){
    botão.classList.toggle(lightModeClass)
    titulo.classList.toggle(lightModeClass)
    body.classList.toggle(lightModeClass)
    containerTitulo.classList.toggle(lightModeClass)
}

function mudaTextos(){

    const lightMode='Light mode';
    const darkMode='Coffee mode';

    if(botão.classList.contains(lightModeClass)){
        botão.innerHTML=darkMode
        return;
    }

    {botão.innerHTML= lightMode}

}

function mudaFundo(){
    if(botão.classList.contains(lightModeClass)){
        botão.style.color='white';
        botão.style.backgroundColor='#594126'
        
        titulo.style.color='#594126'
        body.style.backgroundColor='white'
        containerTitulo.style.border.color='#594126'

        return;
    }

    {botão.style.color='#594126'
    botão.style.backgroundColor='white'
    titulo.style.color='white'
    body.style.backgroundColor='#594126'
    containerTitulo.style.border.color='white'
    }

}

// Função que chama a função adiciona
function aumenta(){
   adiciona();
}

function adiciona(){
    if(marcaA.classList.contains(marcada)){
    valorAtual=valorAtual+1
    valorContador.innerHTML=valorAtual}
}
// Função que chama a função tira
function diminui(){
    tira();
}

function tira(){
    if(valorAtual!==0)
        valorAtual=valorAtual-1
        valorContador.innerHTML=valorAtual
   
}

//Funções das marcas chamdas pelos botões

function marcaçãoA(){
    classSelect();

    marcaA.innerHTML='Marca A selecionada'
    marcaB.innerHTML='Marca B'
    marcaC.innerHTML='Marca C'
   if(valorAtual!==0){
       valorAtual=0
       valorContador.innerHTML=valorAtual
   }
   
}

function marcaçãoB(){
    classSelect();

    marcaA.innerHTML='Marca A '
    marcaB.innerHTML='Marca B selecionada'
    marcaC.innerHTML='Marca C'
   if(valorAtual!==0){
       valorAtual=0
       valorContador.innerHTML=valorAtual
   }
   
}

function marcaçãoC(){
    classSelect();

    marcaA.innerHTML='Marca A '
    marcaB.innerHTML='Marca B'
    marcaC.innerHTML='Marca C selecionada'
   if(valorAtual!==0){
       valorAtual=0
       valorContador.innerHTML=valorAtual
   }
   
}

function classSelect(){
    marcaA.classList.add(marcada)
    marcaB.classList.add(marcada)
    marcaC.classList.add(marcada)

}
// Função compra, chamada pelo botão de compra
function compra(){
    if(marcaA.classList.contains(marcada) & valorAtual!==0){
    alert('Compra finalizada!')

    marcaA.innerHTML='Marca A'
    marcaB.innerHTML='Marca B'
    marcaC.innerHTML='Marca C'

    marcaA.classList.remove(marcada)
    marcaB.classList.remove(marcada)
    marcaC.classList.remove(marcada)

    valorAtual=0
    valorContador.innerHTML=valorAtual
    }

}
// Constantes que armazenam meus elementos html, e constante com valor light-mode 

const lightModeClass='light-mode';

const botão=document.getElementById('botão');

const body=document.getElementsByTagName('body')[0];

const titulo=document.getElementsByTagName('h1')[0];

const containerTitulo=document.getElementsByClassName('container-titulo')[0];

//Constantes que armazenam meus elementos html do contador e da marca

const botaoContadorMais=document.getElementsByName('contador-mais')[0];
const botãoContadorMenos=document.getElementsByName('contador-menos')[0];
const valorContador=document.getElementById('valor-atual');
var valorAtual=0

//Constantes que armazenam minhas marcas, seus botões e classe selecionada

const marcaA=document.getElementsByClassName('a')[0];
const botãoA=document.getElementsByName('botão-A')[0];

const marcaB=document.getElementsByClassName('b')[0];
const botãoB=document.getElementsByName('botão-B')[0];

const marcaC=document.getElementsByClassName('c')[0];
const botãoC=document.getElementsByName('botão-C')[0];

const marcada='selecionada'

// Constante que armazena meu botão de compra
const botãoCompra=document.getElementsByClassName('botão-compra')[0];

// Adiciona o evento de click e sua função no botão light mode

botão.addEventListener('click',mudaModo);

// Adiciona o evento de clique e sua função aos botões contadores mais e menos

botaoContadorMais.addEventListener('click', aumenta);
botãoContadorMenos.addEventListener('click', diminui);

// Eventos de clique e funções das botões das marcas
botãoA.addEventListener('click', marcaçãoA);
botãoB.addEventListener('click', marcaçãoB);
botãoC.addEventListener('click', marcaçãoC);

//Adiciona evento de clique e função ao botão de compra
botãoCompra.addEventListener('click', compra)