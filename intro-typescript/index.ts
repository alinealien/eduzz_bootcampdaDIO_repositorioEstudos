/*function soma(a:number, b:number) {
    return a + b;
}
soma(2, 4);*/
 
// types
// interfaces

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number) : void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal : IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido(' ');

const felino : IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,

}