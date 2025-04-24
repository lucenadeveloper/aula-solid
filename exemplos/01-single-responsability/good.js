// ✅ EXEMPLO BOM – Aplicando SRP corretamente

/*
🧠 Por que está melhor?
- Cada função tem **uma única responsabilidade**
- A lógica está **dividida em partes reutilizáveis**
- Fácil de manter, testar e entender
- Segue o princípio SRP: cada função faz só uma coisa!
*/

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
  
  function finalizarVenda(cliente, produto) {
    if (!validarVenda(cliente, produto)) {
      console.log("Erro na venda");
      return;
    }
  
    const total = calcularTotal(produto);
    imprimirCupom(cliente, produto, total);
  }