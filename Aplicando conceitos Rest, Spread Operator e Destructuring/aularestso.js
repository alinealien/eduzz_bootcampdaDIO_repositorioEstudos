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

    function sun(a, b) {
        var value = 0;

        for (var i =0; i < arguments.length; i++){
            value += arguments[i];
        }
    
        return value;
    }
        console.log(sun(5, 5, 5, 2, 3));
    
        // Rest Operator