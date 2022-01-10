//AULA I
/*function soma(a:number, b:number) {
    return a + b;
}
soma(2, 4);*/
 
// AULA II - types e interfaces
// types : juntar diferentes interfaces ou definir que uma var pode ser uma interface ou outra
// interfaces : definir contratos de estruturas de dados
/*
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';

}

type IDomestico = IFelino | ICanino; // definindo um tipo ou outro/ tbm podemos juntar

const animal : IDomestico = {
   domestico: true,
   nome: 'cachorro',
   porte: 'medio',
   tipo: 'terrestre',
   visaoNoturna: true,
    
}

/*animal.executarRugido(' ');

const felino : IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,

}*/

//AULA III - tag input
//aqui com o (as), ele explicita que é um elemento HTML - pode ser feito com qualquer tipo de elemento
//HTMLInputElement

const input = document.getElementById('input') as HTMLInputElement; 

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    
    //console.log('Me lasquei do coração');
    //console.log(event.currentTarget.);

});