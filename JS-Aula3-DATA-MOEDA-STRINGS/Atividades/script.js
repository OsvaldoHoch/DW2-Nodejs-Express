//Atividade 3
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
}

const homemAranha = new Heroi("Pedro Parque", "200", "Ágil", "300");

homemAranha.teia = (function(teia){
    if(teia == 1){
        document.write("<h1>Vai TEIA</h1>");
    } else {
        document.write("<p>Vem teia... </p>");
    }
})(1);

homemAranha.sentidoAranha = function(){
}

const superman = new Heroi("Clarke Quente", "10000", "Velocidade do Som", "10000");

superman.podeVoar = 1;
