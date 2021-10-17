# REPOSITÓRIO DE ESTUDOS DO BOOTCAMP EDUZZ DA DIO 



### Aula: JavaScript ES6 essencial  

#### JavaScript : 

* Criado em 1995, por Brendan Eich.
* Em 1996 para padronizar a linguagem, a Netspace uniu o JavaScript à ECMA **(Associação Europeia dos Fabricantes de Computadores)**. Tornando-se o nome oficial da tecnologia. Abreviação **ES**.



#### TC39

* Grupo técnico do ECMA <em>International</em>, que é a organização que publica as especificações como padrão. O JavaScript é a implementação desses padrões
* Links: https://tc39.es/ | https://github.com/tc39/proposals/



#### História e conceitos



##### Fluxo de Proposta

* ***Stage 0: strawman |***  Vai submeter um formulário de uma ideia para evoluir o ECMAScript. As submissões são feitas por um membro ou contribuir registrado no TC39. Obrigatório o documento ser revisado para o TC93 e depois é adicionado as paginas da proprosta para uma Stage 0.
* ***Stage 1: proposal |*** Aqui é onde surge a proposta formal da fucnionalidade. Obrigatório ter um campeão e ser membro do TC39. Deve ser bem descrito o objetivo da proposta e tem que ter exemplos. Se a proposta for aceita pelo TC39, ele vai analisar e contribuir com a proposta. É possivel que haja várias alterações nessa estapa.
* ***Stage 2: draft |*** Primeira versão da proposta na especificação. A proposta deve ter uma descrição formal da sintaxe e semântica da funcionalidade. A descrição deve ser completa. Duas implementações são necessarias: Uma delas podem rodar pelo papel. Depois são as alterações incrementais nessa proposta.
* ***Stage 3: candidate |*** Feedback de implementações e de usuários. A especificação deve estar completa nesta fase. Algumas revisões da TC39 que não podem ser feitas pelo campeão responsavel e o editor  da especificação ECAMScript precisa assinar a especificação. Deve ter pelo menos duas implementações compativeis com essa especificação. No proximo passo vai poder ter alterações nessa proposta de questões criticas de acordo com o feedback.
* ***Stage 4: finished |*** Ela é uma proposta pronta para ser colocada na especificação, mas ainda ha pontos a progredir. Ela tem que passar pelo switch de testes de novo, duas implementações em comformidade que passam no teste e tem que ter experiencia pratica na implementação. E o editor da especificação da ECMAScript deve assinar otexto da especificação.



#### ES2018

* Operadores rest/spread
* Iteração assíncrona
* Promise.prototype.finally()



#### ES Next

* Possui futuras implementações. Não esta disponivel.



#### Babel

* Link: https://babeljs.io/



#### Linguagem Interpretada

* Codigo executado de cima para baixo e o resultado do codigo é imediatamente retornado.



#### Linguagem de tipagem fraca e dinâmica

* FRACA: Não ha verificação em todas as operações no javascript.
* DINAMICA: Não precisa explicitar o tipo da variável no momento da criação.



#### Typescript (Superset da linguagem Js)

* https://www.typescriptlang.org/
* Consegue adicionar  tipos  em tempo de desenvolvimento e adiciona funcionalidade. Interfaces, Enuns, Generics.

#### Flow

* https://flow.org/en/



#### Funções de primeira classe e ordem maior

* A função pode ser atribuida um variavel, ela pode ser atribuida a uma estrutura de dados(object, array), pode ser passada por argumentos e funções.



#### Closure

* Capacidade de uma função lembrar do ambiente q ela foi criado. Escopo.



#### Currying

* Tecnica de transformar uma função com n parametros em apenas uma função que recebe um parametro e cada parameto vai retornar uma nova funcao.

  

#### Hoisting

* Levantar algo. Ocorre em Js em declarações de variaveis e funções, as declarações (var e function) são elevadas ao escopo em que ela esta (seja bloco, função ou, global). Dois tipos de Hoisting: De variaveis e Funções. Onde a de variaveis so eleva a criação da variavel e nao sua atribução. Ja a de função é elevada ao topo como um todo, ate a sua assinatura.

  

#### Imutabilidade

* Conceito de linguagem funcional. Onde os dados nunca vão mudar. São imutaveis. Se precisar alterar, tera que criar uma nova. OBS: Um objeto nunca sera atualizado. Ele vai ser copiado e iremos alterar o que queremos.
* Passar por referencia é quando alteramos eles, vai esta alterando o mesmo local que a variavel aponta.



### Tipos e Variáveis

* **Sobre Variáveis:** Três formas de criar (armazenar um valor) : **var** : pioneiro //  **let - const** : com eles foi introduzido o escopo de bloco.
* **String** : TEXTOS.
* **Number** : NUMEROS.
* **Boolean**: TRUE / FALSE
* **Null**: NULOS
* **Undefined**: INDEFINIDOS (HOISTING)
* **Symbol**: SIMBLOS QUE PERMITEM A CRIAÇÃO DE VALORES UNICOS
* **Object**: OBJETOS. Permite que registremos atributos ou propriedades deles.
* **Function**: TAMBÉM UM TIPO DE OBJETO MAS PERMITE QUE NOSSO OBJETO SEJA CHAMADO.
* **Array**: TAMBÉM OBJETO, MAS ELE TEM RELAÇAO COM OS ITENS(FILHOS)

 DELES. CONSEGUEM ORGANIZAR OS ITENS.



### Operadores 

#### Operadores Binários: operando1 operador operando2 - 1+ 2

#### Operadores Unário: operador1 operador / operador operando1 - x++ / ++x

* Aritméticos:
  1. (+) = Soma
  2. (-) = Subtração
  3. (*) = Multiplicação
  4. (/) = Divisão Normal
  5. (%) = Módulo
  6. (++) = Incremento
  7. (--) = Decremento
* Atribuição:
* Comparação:
* Condicional:
* Lógicos:
* Spread:
* Outros:

### Estruturas Condicionais 

* If: Permite ao JS executar um trecho de código somente se uma determinasda condição for verdadeira

  if (condicao){

  //codigo

  }

* else: Permite que se em uma condição verdadeira ou falsa, caso ela seja falsa, utiliza-se else

  if (condicao){

  //se for verdadeira executa

  }else

  //se condicao for falsa executa

  }

* else if: Para casos em que precisamos testar uma nova condição antes de executar o treho de codigo alternativo

  var preco = 70;

  if (preco > 100 ) {

  console.log("Desconto de 10% liberado");

  } else if (preco > 50) {

  console.log("Desconto de 5% liberado");

  } else {

  console.log("Nem um desconto foi liberado");

  // vai imprimir "Desconto de 5% liberado" 

  }

  

### Estruturas de Repetição

* for : Para.

* while: Podemos utiliza-lo para repetir um bloco de comando por N vezes.

  let i = 0;

  while (i < 11) {

  console.log('5 x' + i +'='+5*i);

  i++;

  }

* do... while: Igual ao while, no entanto, a condição é verificada após os comandos do bloco serem executados

  let contador = 0;

  do {

  console.log("O contador vale: " + contador);

  contador++;

  }while(contador == 1)

* for... in

* continue: permite que no processo de interação item a item, dependendo da condiçao do primeiro indice, ele pula o segundo item e vai para o terceiro (Caso a condição do item seja 1 até 3 )

* break: Mata o laço. Qual quer um (for, while, do...while, for...in.

  



### Introdução a Orientação a Objetos

* Herança: Baseada em prototipos. 

  1. Prototype. Armazena as definições do nosso objeto. proto______ . Constructor(tipo): Que é criado um prototype e nessa var armazenamos a referencia dela por esse __proto__

  ​       EX:

  ​       __'use strict'

  ​       const myText = 'Hello prototype';

  ​       myTest.split('  '); // <- __

  ..........................................................

  ​       'use strict'

  ​        const mytext = String('Hello prototype');

  ​        console.log(myText.-____proto____.)

  ​        // f split() { [native code]}

  ..............................................................

  ​       'use strict'

  ​        console.log(String.prototype.split)

  ​        // f split() { [native code]}

  ............................................................

* Classes

* Modificadores de acesso

* Encapsulamento

* Static:



### Design Patterns

* Design Patterns ou padrão de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

* Using Pattern Languages for Onject-oriented Programs - 1987. Kent Beck e Ward Cunningham. 5 padrões de projetos.

* Design Patterns: Elements of Reusable Object-Oriented Software - 1994 - Grang of four (GoF) - Erch Gamma, Richard Helm, Ralph Johnson e John Vlissides.

* Tipos: Criação - Estruturais - Comportamentais

* Padrões de Criação: Os padrões de criação são aqueles que abstraem e/ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados. **Abstract Factory, Builder, Factory Method, Prototype, Singleton**

* Padrões estruturais: Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. **Adapter, Bridge, Composite, Decorator, Facade, Business Delegate, Flyweight, Proxy**

* Padrões comportamentais: Se concentram em algoritmos e atribuições de responsabilidades entre objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.

* Patterns mais utilizados: 

  * Factory: Tod as as funções que retornam um objeto, sem a necessidade de chamá-las com o **new**, são consideras funções Factory(fábrica).

    .......... EX FACTORY .............

    function FakeUser() {

    return {

    name: 'Guilherme',

    lasteName: 'Cabrini'

    }}

  * Singleton: O objetivo desse pattern é criar uma unica instancia de uma função construtora e retorna-la toda vez em que for necessário utiliza-lo. 

    jQuery:

    https://jquery.com/

    ....... EX ........

    var SETTINGS ={

    api: 'http://localhost',

    trackJsToken: '123456'

    }

    fuction MyApp(){

    if (!MyApp.instance){

    MyApp.instance = this;

    }

    return MyApp.instance;

    }

  * Decorator: Uma função decorator recebe uma outra função como parâmetro e estrende o seu comportamento sem modifica-lo explicitamente. @ . Só executa a ação se estiver autenticado.

    ........ EX ...............

    function readonly(target, name, descriptor) {

    descriptor.writable = false;

    return descriptor;

    }

    calss Job {

    @readonly

    title() { return 'CEO'}

    }

    ................ 2 ....................

    @Component ({

    selector: 'app-reactive-favorite-color',

    template: '

    Favorite Color: <input typw="text" [formControl]="favoriteColorControl">

    ' })

    export class FavoriteColorCompont {

    favoriteColorControl = new FormControl('');

    }

    

  * Observer: É um pattern muito popular em aplicações javascript. A instancia (subscriber) mantém uma coleção d eobjetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

    ..... EX ...

    class Observable{

    constructor(){

    this.observers = []

    }

    subscribe(f){

    this.observers.push(f);

    unsubscribe(f){

    this.observers = this.obserbers.filter(subscriber => subscribe !== f);

    }

    notify(data){

    this.observers.forEach(observer => observer(data));

    }}

  * Module: E um pattern que possibilita organizamos melhor o nosso codigo, sem a necessidade de expor variaveis globais.

    ..... EX ......

    class Person{

     constructor(name){

    this.name = name;

    }

    }

    export default Person;

    //utilizar person

    import Person from './models/person';



### Criando e Manipulando Arrays

* Criando um Array

  ​                          .... EX ....

  ​                    const arr = [1,2,3];

  ​                    const arr2 = new Array(1,2,3);

  

  1. ***Array.of :*** Cria uma nova instância de array a partir do número de parâmentros informados. -> EX: const arr = Array.of(1,2,3);

     

  2. ***Array:*** Cria uma nova instância de array de acordo com os parâmetros informados.

  ​       EX: const arr = Array(3); // [empty x 3]

  ​      const arr2 = Array(3, 2), // [3, 2]

  

  3. ***Array.from:*** Criar uma nova instância de array a partir de um parâmetro array-like ou iterable object 

  ​       Ex: const divs = document.querySellectorAll('div');

  ​      const arr = Array.from(divs);

  

* Inserindo e removendo elementos

  1. ***push:*** Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array

  ​       EX: const arr =['banana', 'melancia' 'abacaxi'];

  ​      const arrLength = arr.push('acerola');

  ​      console.log(arrLength) //4

  ​      console.log(arr) ; //['banana', 'melancia', 'abacaxi', 'acerola'];

  

  2. ***pop:*** Remove o último elemento de um array e retorna o elemento removido.

  ​       EX: const arr =['banana', 'melancia' 'abacate'];

  ​       const removedItem = arr.pop();

  ​       console.log(removedItem) //abacate

  ​       console.log(arr); // ['banana', 'melancia', 'abacate']

  

  3. ***unshift:*** Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array.

  ​       EX: const arr =['banana', 'melancia' 'abacaxi'];

  ​      const arrLength = arr.unshift('acerola');

  ​      console.log(arrLength) // 4

  ​      console.log(arr); // ['acerola, 'banana', 'melancia', 'abacaxi'];

  

  4. ***shift:*** Remove o primeiro elemento de um array e retorna o elemento removido.

  ​       EX: const arr =['banana', 'melancia' 'abacate'];

  ​       const removedItem = arr.shift();

  ​       console.log(removedItem) //banana

  ​       console.log(arr); // ['melancia', 'abacate']

  ​       concat: Concatena um ou mais arrays retornando um novo array

  ​       EX: const arr = [1, 2, 3];

  ​       const arr2 = [4, 5, 6];

  ​       const novoArr = arr.concat(arr2);

  ​       console.log(arr); // (3) [1,2,3]

  ​       console.log(arr2); // (3) [4,5,6]

  ​       console.log(novoArr); // (6) [1,2,3,4,5,6]

  

  5. ***slice:*** Retorna um novo array "fatiando" o array de acordo com o ínicio e fim.

  ​       EX: const arr = [1, 2, 3, 4, 5];

  ​      arr.slice(0,2); // [1,2]

  ​      arr.slice(2); // [3,4,5]

  ​      arr.slice(-1); // [5]

  

  6. ***splice:*** Altera um array adicionando novos elementos enquanto remove elementos antigos.

  ​       EX: const arr = [1, 2, 3, 4, 5];

  ​       arr.splice(2) // [3, 4, 5]

  ​       console.log(arr); // [1,2]

  ​       arr.splice(0,0, 'frist'); //[]

  ​       console.log(arr); // ['frist', 1,2]; 

  

* Iterar elementos : 

  1. ***for each:*** Iteração de cada item   dentro de um array.

  ​       EX: const arr = [1,2,3,4,5];

  ​       arr.forEach((value, index) => {

  ​       console.log(`${index}: ${value}`);

  ​       });

  2. ***map:***  Retorna um novo array, de mesmo tamanho, iterando cada item de um array.

  ​       EX: const arr = [1,2,3,4,5];

  ​       arr.map(value => value * 2); // [2,4,6,8,10]

  3. ***flat:*** Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth).

  ​        EX:  const arr [1,2,[3,4]];

  ​        arr.flat(); // [1,2,3,4]

  4. ***flatMap:*** Retorna um novo array assim como a função map e executa um flat de profundidade 1.

  ​       EX:

  ​       const arr = [1,2,3,4];

  ​       arr.flatMap(value =>[value * 2]); // [2,4,6,8]

  ​       arr.flatMap(value => [[value *2]]) // [[2]], [4],[6], [8]]

  ​       keys: Retorna um Array Iterator que contém as chavez para cada elemento do array.

  ​       EX: const arr = [1,2,3,4];

  ​       const arrIterator = arr.keys();

  ​       arrIterator.next(); // [value: 0, dome: false]

  ​       arrIterator.next(); // [value: 1, dome: false]

  ​       arrIterator.next(); // [value: 2, dome: false]

  ​       arrIterator.next(); // [value: 3, dome: true]

  5. ***values:*** Retorna um Array Iterator que contém os valores para cada elemento do array.

  ​        EX: const arr = [1,2,3,4];

  ​        const arrIterator = arr.values();

  ​        arrIterator.next(); // [value: 1, dome: false]

  ​        arrIterator.next(); // [value: 2, dome: false]

  ​        arrIterator.next(); // [value: 3, dome: false]

  ​        arrIterator.next(); // [value: 4, dome: true]

  6. ***entries:*** retorna um Array iterator que contém os pares chave/valor para cada elemento do array.

  ​        EX: const arr = [1,2,3,4];

  ​        const arrIterator = arr.entries();

  ​        arrIterator.next(); //{value: [0/1], dome: false}

  ​        arrIterator.next(); // {value: [1,2], dome: false}

  ​        arrIterator.next(); // {value: [2,3], dome: false}

  ​        arrIterator.next(); // {value: [3,4], dome: true}

  

* Buscar elementos: 

  1. ***find:*** Retorna o primeiro item de um array que satisfaz a condição.

  EX: const arr = [1,2,34];

  const firstGreaterThanTow = arr.find(value => value > 2);

  console.log(firstGreaterThanTow); // 3

  

  2. ***findIndex:*** Retorna o indice do primeiro item de um array que satisfaz a condição.

  EX: const arr = [1,2,3,4];

  const firstIndexGreaterThanTow = arr.findIndex(value => value > 2); 

  console.log(firstIndexGreaterThanTwo);

  

  3. ***filter:*** Retorna um novo array com todos os elementos que satisfazem a condição..

  EX: const arr = [1,2,3,4];

  const allValuesGreaterThanTwo = arr.filter(value => value > 2);

  console.log(allValuesGreaterThanTwo);

  

  4. ***indexOf:*** retorna o primeiro Índice em que um elemento pode ser encontrado no array.

  EX: const arr = [1,3343];

  const firstIndexOfItem = arr.indexOf(3);

  console.log(firstIndexOfItem); // 1

  

  5. ***lastIndexOf:*** Retorna o ultimo índice em que um elemento pode ser encontrado no array.

  EX:const arr = [1,3,3,4,3];

  const lastIndexOfItem = arr.lastIndexOf(3);

  console.log(lastIndexOfItem);

  

  6. ***includes:*** Retorna um booleano verificando se determinado elemento existe no array.

  EX: const arr = [1,3,3,4,3];

  const hasItemOne = arr.includes(1); // true

  const hasItemTwo = arr.includes(2); // false

  

  7. ***some:** Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição.

  EX:

   cont arr = [1,,3,3,4,3];

  const hasSomeEvenNumber = arr.some(value => value % 2 === 0); // true

  

  8. ***every:*** Retorna um booleano verificando se todos os itens de um array satisfazem a condição.

  EX: const arr = [1,3,3,4,3];

  const allEvenNumbers = arr.every(value => value % 2 === 0); // false

  

* Ordenar elementos : 

  1. ***sort:*** Ordena os elementos de um array de acordo com a condição. 

  EX: const arr = [1,3,2,5,4]

  arr.sort(); // [1,2,3,4,5]

  

  2. ***reverse:*** inverte os elementos de um array.

  EX: const arr = [1,2,3,4,5];

  arr.reverse(); // [5,4,3,2,1]

  

* Transfrormar um array em outro tipo de dados: 

  1. ***join:*** Junta todos os elementos de um array, separados por um delimitador e retorna uma string.

  EX: const arr = [1,2,3,4,5];

  arr.join('-'); // "1-2-3-4-5"

  

  2. ***reduce:*** Retorna um novo tipo de dado iterando cada posição de um array.
  
  EX: const arr = [1,2,3,4,5];
  
  arr.reduce((total, value) => total <= value, 0); //15



