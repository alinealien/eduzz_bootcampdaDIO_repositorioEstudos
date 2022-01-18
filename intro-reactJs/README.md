#### INTRODUÇÃO AO REACTJS

____________________________________________

##### História e Conceitos

- "Uma biblioteca JavaScript para criar interfaces de usuários"
- Criado em 2011 por Jordan Walker no Facebook;
- Baseado no XHP, um framework para criação de HTML no PHP;
- Utilizado no mural de notícias de ferramentas
- React é uma biblioteca e não um framework;
- A principal função é a criação da interface para o usuário;
- Modular são pequenas peças que vamos acoplando ao longo do projeot
- React é um a linguagem declarativa
- Declarativa vs Imperativa
- O React está preocupado apenas com o que é exibido na interface do usuário
- Pode ser utilizado em qualquer lugar
- 
- React baseado em componentes

##### Configurações

- PRIMEIRO: npm init (vai inicializar a npm)

- PARA INSTALAR O REACT:  npm install --save react@16.8.6 react-dom@16.8.6  react-scripts@3.0.1  (A versao pode ser alterada)
- Package.json : É onde fica todas as configurações/dependências do projeto
- NPM : É o gerenciador de dependências do JavaScript                                        

#### O que é JSX

Ele não é HTML e nem string

ex: const element = <h1> Ola Mundo! </h1>

- Linguagem de marcação criada para poder utilizar/criar elementos dentro do html. Criar toda sua extrutura HTML e ter todo o poder do JavaScript dentro dele. Pode-se utilizar/executar funções JavaScript, ter variaveis dentro do JSX.
- React não separa as tecnologias colocando marcação em arquivos separados, e sim, separa conceitos e mantem o código pouco acoplado chamando-os de componentes.
- Não é obrigatório a utilização do JSX
- Sintax Suggar para React.creatElement
- O browser não interpreta o JSX, para isso é necessario um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

EX.: NO VS.



OBS:

 "scripts": 

  "start":  react-scripts start



class (palavra reservada do react) ... utilizar className=" nome da classe "



#### REENDERIZAÇÃO

React DOM: reinderizar os elementos do react

Nós Raís : tudo que é retornado do JSX é um nó



#### COMPONENTES E PROPS

Função e Classe;

Props;

Composição de Componentes;

Extração de Componentes;



#### ESTADO E CICLO DE VIDA

- Inicialização 
- Montagem  
- Atualização  
- Desmontagem 

* Nenhum componente pai ou filho devem saber se o outro componente possui estado ou não.

- O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via **props**.

##### Ecossistemas

- React Router;
- Redux;
- Material UI;
- Ant-Desing;
- Gastsby;
- Jest;
- React i18n Next;





