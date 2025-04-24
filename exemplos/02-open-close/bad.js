// ❌ EXEMPLO RUIM – Quebra do OCP (Open/Closed Principle)

/*
🧠 Problemas:
- A função `calcularDesconto` precisa ser **editada toda vez** que uma nova categoria de cliente aparece
- Isso **quebra o princípio Open/Closed**, que diz:
  "Seu código deve estar **aberto para extensão**, mas **fechado para modificação**"
*/

function calcularDesconto(cliente) {
    if (cliente.tipo === "comum") {
      return 0;
    } else if (cliente.tipo === "fidelidade") {
      return 0.1;
    } else if (cliente.tipo === "funcionario") {
      return 0.2;
    } else {
      return 0;
    }
  }
  
  // ➕ Se um novo tipo de cliente aparecer (ex: “conveniado”), temos que reabrir a função e alterar tudo 😬