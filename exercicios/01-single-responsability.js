// 🧠 EXERCÍCIO – SRP: Cada um na sua responsabilidade

/*
Desafio:
Você recebeu uma função que faz de tudo: valida os dados, calcula o valor e imprime o cupom.  
Esse é um clássico caso de violação do princípio SRP (Single Responsibility Principle).

➡️ Sua missão é separar as responsabilidades em funções distintas.

📌 Por que isso é importante?
- Facilita testes
- Deixa o código mais limpo
- Cada parte pode ser reutilizada ou modificada sem impactar as outras

💊 Contexto: venda de um medicamento no balcão
*/

// ❌ Código atual (faz tudo junto)
function processarVenda(cliente, produto) {
    if (!cliente.nome || !produto.nome || produto.preco <= 0) {
      console.log("Erro na venda");
      return;
    }
  
    const total = produto.preco * (produto.quantidade || 1);
  
    console.log(`Venda realizada para ${cliente.nome}`);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
  }
  
  // TODO: Refatore para:
  // - Separar a validação
  // - Separar o cálculo
  // - Separar a exibição do cupom
  // - Tornar cada função mais simples e reutilizável
  
  /*
  
  ✅ RESPOSTA SUGERIDA:
  
  function validarVenda(cliente, produto) {
    return (
      cliente?.nome &&
      produto?.nome &&
      typeof produto.preco === "number" &&
      produto.preco > 0
    );
  }
  
  function calcularTotal(produto) {
    const quantidade = produto.quantidade || 1;
    return produto.preco * quantidade;
  }
  
  function imprimirCupom(cliente, produto, total) {
    console.log(`Venda realizada para ${cliente.nome}`);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
  }
  
  function processarVenda(cliente, produto) {
    if (!validarVenda(cliente, produto)) {
      console.log("Erro na venda");
      return;
    }
  
    const total = calcularTotal(produto);
    imprimirCupom(cliente, produto, total);
  }
  
  */