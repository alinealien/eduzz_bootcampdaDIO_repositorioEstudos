// Destructuring Assignment
// atribuição de variaveis
/*
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
//forma muito verbosa de fazer um arr

var apple = arr[0];
var banana = arr[1];
var orange = arr[3]; 
var tomato = arr[3][0];

// Destructuring Assignment  //[]cria padrao para destrui arrays e não criar arr propriamente dito


var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange', 
    ['Tomato'] //importe criar 
]; 

console.log(tomato2);*/

// Destructuring Assignment (Obj) 

/*var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Aline'
}


var [apple2] = arr;
var { name: name2 } = obj; // definir o nome da variavel, deve-se: : name2

console.log(name2);*/


// Destructuring Assignment tambem com (Obj dentro de Obj)

/*var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Aline',
    props: {
        age: 29,
        favoriteColors: ['black', 'green']    //destruct de arrays dentro do obj/ ou de obj dentro do arr
    }
};
//modo antigo
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

// destructuring assigment

var [apple2] = arr;
var { props: { age: age2, favoriteColors: [color1, color2] }
} = obj;

console.log(color1);*/

// Mais um exemplo com objetos

/* var arr = [{name: 'Apple', type: 'fruit'}]; //sendo obj
var obj = {
    name: 'Aline',
    props: {
        age: 29,
        favoriteColors: ['black', 'green']    //destruct de arrays dentro do obj/ ou de obj dentro do arr
    }
};
//pegar as propriedades do obj o normal seria, abaixo:
var fruit1 = arr[0]. name;


// destructuring assigment

//var [{ name}] = arr;
var [{ name: fruitName}] = arr; //para definir obj 

console.log(fruitName);*/

//Onde (locais) para utilizar o destructuring assigment:

//Na definição de variaveis (como abaixo:) (var, let ou const)
/*var arr = [{name: 'Apple', type: 'fruit'}]; //sendo obj
var obj = {
    name: 'Aline',
    props: {
        age: 29,
        favoriteColors: ['black', 'green']    //destruct de arrays dentro do obj/ ou de obj dentro do arr
    }
};*/

// Functions/Arrays

//function sum(arr){
    //function sum([a, b] = []) {
        //function sum([a, b] = [0,0]) {
            function sum({a, b} ) { //tbm funciona com objetos
    //var a = arr[0] //modo antigo
    //var b = arr[1]
    return a + b;
    //return arr[0] + arr[1]; 

}

console.log(sum({a: 5, b: 5}));