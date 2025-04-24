// ✅ Atendimento separado por tipo de necessidade

/*
🧠 Por que está melhor?
- Cada função pede apenas as informações **que realmente usa**
- Código mais modular, reutilizável e fácil de entender
- Aplicação clara do princípio: **não sobrecarregar a interface**
*/

function atendimentoVendaSimples(cliente) {
    console.log(`Atendendo ${cliente.nome} na compra comum.`);
  }
  
  function atendimentoComReceita(cliente, receita) {
    console.log(`Validando receita de ${cliente.nome}: ${receita.numero}`);
  }
  
  function atendimentoViaSus(cliente, cartaoSus) {
    console.log(`Consulta SUS para ${cliente.nome} com cartão ${cartaoSus}`);
  }
  
  // Cada fluxo usa apenas os dados necessários
  atendimentoVendaSimples({ nome: "Carlos" });
  atendimentoComReceita({ nome: "Ana" }, { numero: "RX123" });