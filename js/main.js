//comentário e /* pra comentar tudo


//BLOCO 1//
/*var nome = "Luana Bolognini";
var idade = 24;
var idade2 = 10;
var n1=5;
var n2=3;
var frase = "Trabalhando com as strings"
//alert(nome + " tem " + idade + " anos");

//alert(idade+idade2);

//no primeiro ele entendeu que eram strings porque estávamos colocando concatenado com aspas
//no segundo ele entendeu que eram números


//no navegador, apertar F12 ou inspecionar, clicar em CONSOLE
console.log(nome);
console.log(idade+idade2);
console.log(n1*n2); //fazendo contas com variáveis definidas
console.log(frase);
console.log(frase.replace("string", "palavras")); //nesse comando, fazemos uma alteração direta na frase declarada no início do arquivo

console.log(frase.toUpperCase()); //fazer todas as letras maiúsculas
console.log(frase.toLowerCase()); // todas minúsculas
*/


//BLOCO 2//
/*var lista = ["maça", "pera", "laranja"];
lista.push("uva"); //adicionei elemento
//lista.pop(); //retirar elemento
console.log(lista);
console.log(lista.length);
console.log(lista.reverse);
console.log(lista.toString); //perde a referência de array, e vira uma string
console.log(lista.toString()[0]);
console.log(lista.join(" - ")); //vai aparecer a separação que a gente escolheu entre os elementos do array
//alert(lista[1]);
*/

//BLOCO 3//
//var fruta = {nome:"maca", cor:"vermelha"}
//console.log(fruta.nome);


//BLOCO 4//
/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//BLOCO 5//
/*
var count = 0;
while (count<=5){
    console.log(count);
    //alert(count); faz aparecer o treco todo em alerta
    count = count +1; //ou count++
};

// for serve como repetição do mesmo jeito
for(count=0; count <= 5; count++){ 
    //alert(count);
};
*/


//BLOCO 6//
/*var d = new Date();
alert(d.getMonth()+1); ///ele sempre conta month a partir de zero então tem que colocar o +1
//dá pra fazer com get.Day, get.Hours etc
*/


//PÁGINAS WEB COM JS//
/*
function soma(n1, n2){
    return n1+n2;
}


function validadeIdade(idade){
    var validar; //dentro da function ele foi declarado localmente, se colocar por fora, ele declara globalmente, aí ele vai usar o que foi declarado localmente e em qualquer lugar
    if (idade >= 18){
            validar = true
    } else {
        validar = false
    }
    return validar;
    
}

var idade = prompt("Qual a sua idade?");
console.log(validadeIdade(idade));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


//ALTERANDO ELEMENTOS EM PÁGINAS WEB//
function clicou(){
    document.getElementById("Agradecimento").innerHTML = "inserir um elemento, quando clicar aqui vai redirecionar pra página que eu coloquei na função abaixo"; //vai trazer o elemento que tem isso escrito; injetar texto com html
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.eventbrite.fr/x/webinar-programa-internacional-de-admissao-2021-ip-paris-ingenieur-registration-103906230332"); // abre em outra aba
    window.location.href = "https://www.eventbrite.fr/x/webinar-programa-internacional-de-admissao-2021-ip-paris-ingenieur-registration-103906230332"; // outra forma de fazer o redirecionamento para outra página, esse abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "novo texto vai aparecer ao passar o mouse -- esse";
    //alert("trocar texto");

    //outra maneira é o onmouseout, que aí ele volta pro que tava antes assim que tirar o mouse de cima.
    //usando this dentro dos parenteses, ele usa o próprio elemento, ao invés de ficar pegando outros
}

function funcaoChange(elemento){
    console.log(elemento.value);
} //bem legal essa última função, o select coloca como opções, e vai imprimindo o que a gente escolheu