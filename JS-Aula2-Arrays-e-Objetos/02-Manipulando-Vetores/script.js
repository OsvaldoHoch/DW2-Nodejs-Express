// Métodos de manipulação de vetores

let frutas = ['Laranja', 'Maça', 'Banana'];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = 'Morango';

document.write(`<p>Agora a lista é: ${frutas}</p>`);


//MÉTODO PUSH: Insere um novo elemento no FINAL do vetor.
frutas.push('Abacaxi');
document.write(`<p>Agora a lista é: ${frutas}</p>`);


//MÉTODO UNSHIFT: Insere um novo elemento no ÍNICIO do vetor
frutas.unshift('Pera');
document.write(`<p>Agora a lista é: ${frutas}</p>`);


//MÉTODO LENGTH: Retorna o número de elementos no vetor
document.write(`<p>Na nossa lista temos ${frutas.length} itens</p>`);


//MÉTODO SORT: Ordena os itens do Vetor
document.write(`O primeiro item da lista é: ${frutas[0]}`);

let frutasOrdenadas = frutas.sort();

document.write(`<br>O primeiro item da lista é: ${frutasOrdenadas[0]} (Ordenada)`);


//MÉTODO SORD: Crescente e Decrescente
let numeros = [6, 8, 2, 9, 3, 800, 200];

document.write(`<p>Os números são: ${numeros}</p>`);
document.write(`<p>Os números ordenados com apenas 'sort' são: ${numeros.sort()}</p>`);

//Ordenando corretamente os números
//ORDEM CRESCENTE
document.write(`<p>Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`);
//ORDEM DECRESCENTE
document.write(`<p>Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`);