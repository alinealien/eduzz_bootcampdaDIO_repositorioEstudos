// Generators:
// Funções com pausa e despausa e retornam valores, atravez da iteração (value e done)
// pode-se passar dados também
/*function* hello() {

    console.log('hello');
    //yield; //valor undefined
    yield 1; //valor 1

    console.log('from');
    const value = yield 2;
    //yield;
    //yield 2;
    
    //console.log('function');
    console.log(value);

}
    const it = hello();

    console.log(it.next());
    console.log(it.next());
    console.log(it.next('Outside!'));*/

    /*function* naturalNumber() {
        let number = 0;
        while (true) {
            yield number;
            number++;

        }
    }

    const it = naturalNumber();

    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());*/

    //Generator : /Gerar/Construir a interface de iteracao

const uniqueId = Symbol('Hello');
//

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation one';

const obj = {
values: [1, 2, 3, 4],
*[Symbol.iterator](){
    for (var i = 0; i < this.values.length; i++) {

    yield this.values[i]; //não precisou do next, pois com o generator ele ja faz isso

}
}
};

for (let value of obj) {
    console.log(value);
}
