// 🧠 EXERCÍCIO – OCP: Aberto para extensão, fechado para modificação

/*
Desafio:
A farmácia quer aplicar descontos diferentes dependendo do tipo de cliente.

Mas a função `calcularDesconto` precisa ser editada toda vez que um novo tipo aparece.  
Isso **viola o princípio Open/Closed**, pois o código deveria **permitir extensões sem precisar de modificações diretas**.

➡️ Sua missão é reorganizar o código para torná-lo **extensível sem alterar a função principal**.

📌 Regras atuais:
- Cliente comum: 0%
- Fidelidade: 10%
- Funcionário: 20%

🎯 O objetivo é: deixar o código pronto para **adicionar novos tipos de cliente sem alterar a função**
*/

// ❌ Código atual (violando OCP)

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
  
  const cliente = { nome: "Carlos", tipo: "fidelidade" };
  const desconto = calcularDesconto(cliente);
  console.log("Desconto:", desconto);
  
  // TODO: Refatore usando um objeto de estratégias ou funções por tipo de cliente
  // TODO: Garanta que seja fácil adicionar novos tipos sem alterar a função principal
  
  /*
  
  ✅ RESPOSTA SUGERIDA:
  
  const regrasDesconto = {
    comum: () => 0,
    fidelidade: () => 0.1,
    funcionario: () => 0.2,
    conveniado: () => 0.15, // ➕ novo tipo pode ser adicionado aqui
  };
  
  function calcularDesconto(cliente) {
    const regra = regrasDesconto[cliente.tipo] || (() => 0);
    return regra();
  }
  
  const cliente = { nome: "Carlos", tipo: "fidelidade" };
  const desconto = calcularDesconto(cliente);
  console.log("Desconto:", desconto);
  
  */