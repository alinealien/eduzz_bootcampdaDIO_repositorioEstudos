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
/*

const input = document.getElementById('input') as HTMLInputElement; 

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    
    //console.log('Me lasquei do coração');
    //console.log(event.currentTarget.);

}); */

// AULA IV - Generic types - so aceita tipos iguais
/*

function adcionarApendiceALista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor);
}

adcionarApendiceALista([1, 2, 3], 1); //ele inferiu que o valor é numerico, mesmo acima definindo um tipo generico
*/

//desenvolvendo condicionais com parametros 
/* interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

//utiliza-se o in para verificar se há um item na interface
function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redirecionar para a área de admnistração
    }

        //redirecionar para a área
} */

//AULA V - "?" para variaveis opcionais
/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
    
    //ao colocar o ? ele tranformou em dado condicional (pode ou nao esta definido)
}

function redirecione(usuario: IUsuario ){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }

    // redirecionar para a área do usuário
} */

//AULA VI - Variaveis com propriedade readonly e private
/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}
//interando todos os itens que adcionar e os valores serao apenas de leitura na hora da implementacao
//-? Remova os valores opcionais
type CachorroSomenteLeitura = {
    readonly [ K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro {
    idade;
    nome;
    parqueFavorito?: string;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Sirius', 6);*/

//AULA - IMPORTANDO BIBLIOTECAS COM TYPESCRIPT
//IMPORTANTE PARA O DESENVOLVIMENTO COM O TS - LEIA ABAIXO -
//npm i --save-dev @types/jquery - para adcionar as dependecias do jquery
//npm install -g typescript - para instalar o typescript
//tsc --init - cria o arquivo TSCONFIG.JSON
/*
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();*/

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade:string;
    
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    idade 
}