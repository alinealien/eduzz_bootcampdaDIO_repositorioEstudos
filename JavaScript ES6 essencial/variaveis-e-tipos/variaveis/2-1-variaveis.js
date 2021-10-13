var test = "example";

(() => {
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    var test = "example"; //var não entende escopo de bloco(hoisting). Ele so aceita escopo de função ou global.
    console.log(`Valor dentro do if "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();