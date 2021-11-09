// Symbols : É um forma de gerar um identificador unico
// Um Symbol é sempre diferente do outro 

/*const uniqueId = Symbol('hello');
const uniqueId2 = Symbol('hello')

console.log(uniqueId === uniqueId2);*/

//Symbols podem se utilizadas para gerar propriedades privadas(para evitar sem acessada se n for intencional)
/*const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
    
}

console.log(obj);*/

// Well Know Simbols : iterator - split - toStringTag

const uniqueId = Symbol('Hello');

//adcionar capacidade
Symbol.iterator //interface para consumir passo a passo uma lista/estrutura de dados
Symbol.split
Symbol.toStringTag

const arr = [ 1, 2, 3, 4];
const str = 'Digital Innovation One';

console.log(arr[Symbol.iterator]().next());
//
const obj = {
    value:[1, 2, 3, 4], //propriedade computada 
    [Symbol.iterator]() {
        let i = 0;

        return{
            next: () => {
                i++;

                return {
                    value:this.value[i - 1],
                    done: i > this.value.length
                };
            }
        };

    }
};

const arr2 = [...obj];

/*for (let value of obj) {
    console.log(value);
}*/

/*const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*for (let value of str) {
    console.log(value);

}*/

//com o Ecma6 - n precisa gerar o iterador(ex.while abaixo)
/*for (let value of arr) {
    console.log(value);

}*/


/* // aqui vai percorrer a estrutura do dado(iterador)
while (true) {
    let {value, done} = it.next();

    if (done) {
        break;
    }

    console.log(value);
}

/*console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/