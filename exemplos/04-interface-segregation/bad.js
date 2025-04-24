// ❌ Interface "genérica demais" forçando todos os caixas a fazerem tudo

/*
🧠 Problemas:
- A função `atenderCliente` exige dados que nem sempre fazem sentido
- Um simples caixa para venda sem receita acaba sendo forçado a lidar com receitas médicas, por exemplo
- Isso **quebra o princípio da segregação**: está pedindo mais do que precisa
*/

function atenderCliente(dadosCliente) {
    console.log("Iniciando atendimento...");
  
    if (dadosCliente.receita) {
      console.log("Validando receita médica...");
    }
  
    if (dadosCliente.cartaoSus) {
      console.log("Consulta via SUS...");
    }
  
    console.log("Finalizando venda");
  }
  
  atenderCliente({ nome: "Carlos", receita: null, cartaoSus: null });