//Atividade 3

//CLASSE HEROI -------------------
class Heroi {
    //Atributos
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    //Métodos
    correr() {
        return "O Héroi está correndo";
    }
    andar() {
        return "O Herói está andando";
    }
    atacar() {
        return "O Héroi está atacando"
    }
    defender() {
        return "O Herói está se defendendo";
    }
};


//HOMEM ARANHA ---------------------------------------------------------------------
const homemAranha = new Heroi("Pedro Parque", "500", "100km/h", "300");

homemAranha.teia = 1;

function teia() {
    if(homemAranha.teia == 1){
        
    }
}

homemAranha.sentidoAranha = function(){
    document.write("<p>O Herói detectou um perigo!</p>");
};

homemAranha.sentidoAranha();


// SUPERMAN -------------------------------------------------------------------------
const superman = new Heroi("Clarke Quente", "10000", "1200km/h", "10000");

superman.podeVoar = (function(voar){
    if(voar == 1) {
        document.write("<p>Superman está voando</p>");
    } else {
        document.write("<p>Superman não está voando</p>");
    }
})(1);

superman.visaoCalor = function(){
    document.write("<p>O Herói está usando sua visão de calor</p>");
};

superman.visaoCalor();


// BATMAN --------------------------------------------------------------------------
const batman = new Heroi("Bruce Waine", "100", "20km/h", "200");

batman.escondido = (function(escondido){
    if(escondido == 1) {
        document.write("<p>Batman está escondido</p>");
    } else {
        document.write("<p>Batman está amostra</p>");
    }
})(1);



