// Aula Parte 1 - Rest e Spread Operator

// Funcao para somar dois parametros/numeros
// funcao testada 
/*
function sun(a, b) {
    return a + b;
}
    console.log(sun(5, 5));
*/

// Funcao para somar varios parametros - Antes do ecma6- imperativo
/*
function sun(a, b) {
    console.log(arguments);

    return a + b;
}
    console.log(sun(5, 5, 5, 2, 3));
    */

    // Exemplo do modo normal de desenvolvimento de função para somar varios parametros
    
     /* 
        function sum(a, b) {
        var value = 0;

        for (var i =0; i < arguments.length; i++){
            value += arguments[i];
        }
    
        return value;
        }
        console.log(sum(5, 5, 5, 2, 3)); */
    
        // Rest Operator ...
  /*
     function sun(...args) {
        console.log(args);
        console.log(arguments);
    }
        console.log(sun(5, 5, 5, 2, 3));
        */
        /*
        function sun(...args) {
            return args.reduce((acc, value) => acc + value, 0);
        }
            console.log(sun(5, 5, 5, 2, 3)); */

            //arrow functions

            // erro de referencia nesse ex pq o arguments não foi definido
            
            /* const sun = (arguments) => {
            };
            console.log(sun(5, 5, 5, 2, 3)); */
            
            //para manipular a lista de argumentos neste caso se usa também o rest operator
           /*
            const sun = (a, b, ... rest) => { // pega argumentos restantes

            console.log(a, b, rest);

            }; 
            console.log(sun(5, 5, 5, 2, 3));*/

            const multiply = (...args) => args.reduce((acc, value) => acc + value, 1);
            
            const sum = (...rest) => {

                return multiply.apply(undefined, rest);
            };

            console.log(sum(5, 5, 5, 2, 3));


