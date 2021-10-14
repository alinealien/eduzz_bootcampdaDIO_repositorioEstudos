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

* Stage 0: strawman |  Vai submeter um formulário de uma ideia para evoluir o ECMAScript. As submissões são feitas por um membro ou contribuir registrado no TC39. Obrigatório o documento ser revisado para o TC93 e depois é adicionado as paginas da proprosta para uma Stage 0.
* Stage 1: proposal | Aqui é onde surge a proposta formal da fucnionalidade. Obrigatório ter um campeão e ser membro do TC39. Deve ser bem descrito o objetivo da proposta e tem que ter exemplos. Se a proposta for aceita pelo TC39, ele vai analisar e contribuir com a proposta. É possivel que haja várias alterações nessa estapa.
* Stage 2: draft | Primeira versão da proposta na especificação. A proposta deve ter uma descrição formal da sintaxe e semântica da funcionalidade. A descrição deve ser completa. Duas implementações são necessarias: Uma delas podem rodar pelo papel. Depois são as alterações incrementais nessa proposta.
* Stage 3: candidate | Feedback de implementações e de usuários. A especificação deve estar completa nesta fase. Algumas revisões da TC39 que não podem ser feitas pelo campeão responsavel e o editor  da especificação ECAMScript precisa assinar a especificação. Deve ter pelo menos duas implementações compativeis com essa especificação. No proximo passo vai poder ter alterações nessa proposta de questões criticas de acordo com o feedback.
* Stage 4: finished | Ela é uma proposta pronta para ser colocada na especificação, mas ainda ha pontos a progredir. Ela tem que passar pelo switch de testes de novo, duas implementações em comformidade que passam no teste e tem que ter experiencia pratica na implementação. E o editor da especificação da ECMAScript deve assinar otexto da especificação.



#### ES2018

* Operadores rest/spread
* Iteração assíncrona
* Promise.prototype.finally()



#### ES Next

* Possui futuras implementações. Não esta disponivel.



#### Babel

* Link: https://babeljs.io/



#### Lingugem Interpretada

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

#### Operadores Bínarios: operando1 operador operando2 - 1+ 2

#### Operadores Unário: operador1 operador / operador operando1 - x++ / ++x

* Aritmetricos:
* Atribuição:
* Comparação:
* Condicional:
* Lógicos:
* Spread:
* Outros:

### Estruturas Condicionais 

* If:
* else:
* else if: