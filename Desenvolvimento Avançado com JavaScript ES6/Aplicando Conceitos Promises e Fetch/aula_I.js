//as funcoes de callback eram usadas para executar algo após determina atividade assincrona 
//exemplo_1 - CALLBACK
/*function doSomething(callbakc){
    setTimeout(function() {
        //did something
        callbakc('Frist data');
        }, 1000);
    }

function doOtherThing(callback) {
    setTimeout(function() {
        //did outher thing
        callbakc('Second data');
    }, 1000);
}    

function doAll() {
    try{
    doSomething(function(data) {
        var processedData = data.split('');
        try{
            doOtherThing(function(data2) {
                var processedData2 = data2.split('');

                try{
                    setTimeout(function() {
                        console.log(processedData, processedData2);
                    }, 1000);
                } catch (err){
                    //handle error
                }
            });
            } catch (err){
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();*/

//Exemplo_2 usando - PROMISES mo ECMA 6

//invocar construtor da promise
const doSomethingPromise = () =>  
new Promise((resolve, reject) => {
    //throw new Error('Something went wrong'); 
    setTimeout(function() {
        //did something
        resolve('Frist data');
        }, 1000);

});

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error('Something wrong'); 
        setTimeout(function() {
        //did something
        resolve('Second data');
        }, 1000);

});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}); //a primeira que resolver sera executada

//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error)); //para imprimir corretamente a promise(then) //para tratar usar catch

//doSomethingPromise.then(data => doOtherThingPromise).then(data2 => console.log(data2)).catch();


// promises em paralelo. Executou as duas ao mesmo tempo.
/*Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
//console.log(data);//apenas as duas ao mesmo tempo
console.log(data[0].split('')); //separou as str em arr
console.log(data[1].split(''));//separou as str em arr
}).catch(err => { //para tartar o erro
    console.log(err)
});*/

/*doSomethingPromise()
    .then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split(''))) //com o split ele separou as strings em arrays
.catch(error => console.log('Ops', error)); //tratamento do erro*/

/*doSomethingPromise.then(data => {
    console.log(data);
    return doOtherThingPromise;
})
.then(data2 => console.log(data2)).catch(); //para imprimir em sequencia os dois dados*/


// Três estados da promise: 
//Pending: Quando esta pendente
//Fulfilled: Terminou de executar
//Rejected: Quando encontra algum erro

//Promise permite que a gente encadei uma na outra

