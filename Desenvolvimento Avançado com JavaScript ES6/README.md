## REPOSITÓRIO DE ESTUDOS DO BOOTCAMP EDUZZ DA DIO 

### Aula: Desenvolvimento Avançado com JavaScript ES6

* Funções avançadas do ES6: 

  1. ***Arrow Functions:*** (=>) Funções anónimas, só pode utiliza-las  ou atribuindo a uma variável ou passando como parâmetro para uma outra função. No JS as funções são de primeira classe.

     EX: 

     var sun (a,b) => a + b;

     console.log(sum(5, 15)); // 20

     *se existir  apenas um argumento pode-se omitir os ()

     

     EX_objetos literais:
  
     *1*: var obj = {
  
     'teste 123'
  
     };
  
     
  
     \\\Argumento explicito
  
     var createObj = () => ({ test: 123 });
  
     console.log(createObj());
  
     
  
     \\\Função construtora
  
     function Car(){
  
     this.foo = 'bar';
  
     }
  
     //Arrow functions
  
     var Car = () => {
  
     this.foo = 'bar';
  
     }; //erro. this.
  
     console.log(new Car());
  
     
  
     //Hosting: caracteristicas das functions e das var para serem movidas para o topo do codigo.
  
     log('teste');
  
     function log(value){
  
     console.log(value);
  
     }
  
     //Arrow functions
  
     não funciona
  
     log('teste');
  
     var log = value => {
  
     console.log(value);
  
     };
  
     //showContext: Vai da um log no contexto
  
     var obj = {
  
     showContext: function showContext(){
  
     console.log('teste');
  
     setTimeout(function){
  
     console.log(this);
  
     }.bind(this),
  
     1000
  
     ); //correção de problema de escopo(bind).
  
     },
  
     log function log(value){
  
     console.log(value);
  
     }
  
     };
  
     obj.showContext(); 
  
     //Arrow functions_sem bind
  
     var obj = {
  
     showContext: function showContext(){
  
     // this = obj
  
     setTimeout(() => {
  
     this.log('after 100ms');
  
     }, 1000);
  
     },
  
     log: function log(value){
  
     console.log(value);
  
     }
  
     };
  
     obj.showContext();
  
  2. Default Function Arguments:
  
  3. Enhanced Object Literals:

