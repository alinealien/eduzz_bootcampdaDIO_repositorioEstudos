// Enhanced Object Literals

// EX: Modo classico para escrever objetos literais

/*
var obj = {
    prop1: 'Digital Innovation one'
}; */

/*
var prop1 = ' Sou não sou ';
var obj = {
    prop1: prop1 //referenciar o objeto 
}; 

console.log(obj); */

/* shot hand
function method1(){
    console.log('method called');
}

var obj = {
    method1
};

obj.method1(); */

/*
var obj = {
    sum: function sum(a, b){
        return a + b;
    }
};

console.log(obj.sum(1, 5)); */

//shot hand para encurtar a forma como escrevemos os objetos literais
/*var obj = {
    sum(a, b){
        return a + b;
    }
};

console.log(obj);*/

var propName = 'test';

var obj = {

[propName + 'concat'] : 'prop value'
};

console.log(obj);