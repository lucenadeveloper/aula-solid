// ❌ EXEMPLO RUIM – Quebra do SRP (Single Responsibility Principle)

/*
🧠 Problemas:
- A função faz **muito mais do que uma coisa só**
- Valida dados, calcula preço, e imprime cupom
- Isso **mistura responsabilidades** e dificulta manutenção, testes e leitura
*/

function finalizarVenda(cliente, produto) {
    // Validação
    if (!cliente.nome || !produto.nome || produto.preco <= 0) {
      console.log("Erro na venda");
      return;
    }
  
    // Cálculo
    const total = produto.preco * (produto.quantidade || 1);
  
    // Exibição
    console.log(`Venda realizada para ${cliente.nome}`);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
  }