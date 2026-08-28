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
        return "<p>O Héroi está correndo</p>";
    }
    andar() {
        return "<p>O Herói está andando</p>";
    }
    atacar() {
        return "<p>O Héroi está atacando</p>"
    }
    defender() {
        return "<p>O Herói está se defendendo</p>";
    }
};


//HOMEM ARANHA ---------------------------------------------------------------------
const homemAranha = new Heroi("Homem Aranha", "500", "100km/h", "300");

homemAranha.teia = (function(teia) {
    if(teia == 1){
        return "<p>Homem Aranha pode soltar teia</p>";
    } else {
        return "<p>Homem Aranha não pode soltar teia</p>";
    }
})(1);

homemAranha.sentidoAranha = function(){
    document.write("<p>O Herói detectou um perigo!</p>");
};

//document.write(homemAranha.teia)
//homemAranha.sentidoAranha();


// SUPERMAN -------------------------------------------------------------------------
const superman = new Heroi("Superman", "10000", "1200km/h", "10000");

superman.podeVoar = (function(voar){
    if(voar == 1) {
        return "<p>Superman pode voar</p>";
    } else {
        return "<p>Superman não pode voar</p>";
    }
})(1);

superman.visaoCalor = function(){
    document.write("<p>O Herói está usando sua visão de calor</p>");
};

//document.write(superman.podeVoar)
//superman.visaoCalor();


// BATMAN --------------------------------------------------------------------------
const batman = new Heroi("Batman", "100", "20km/h", "200");

batman.escondido = (function(escondido){
    if(escondido == 1) {
        return "<p>Batman está escondido</p>";
    } else {
        return "<p>Batman está visível</p>";
    }
})(0);

batman.investigar = function(){
    document.write("<p>Batman está investigando um crime</p>");
};

//document.write(batman.escondido);
//batman.investigar();


// AÇÕES --------------------------------------------------------------------------
document.write(homemAranha.nome);
document.write(batman.correr());
document.write(superman.visaoCalor());






