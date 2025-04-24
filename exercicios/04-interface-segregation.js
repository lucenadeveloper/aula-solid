// 🧠 EXERCÍCIO – ISP: Peça só o que precisa

/*
Desafio:
O sistema de atendimento da farmácia está pedindo informações demais, mesmo quando não precisa.

A função `atenderCliente` obriga todo mundo a passar dados de SUS e receita, mesmo que o cliente só vá comprar um protetor labial.

Isso **quebra o princípio da segregação de interface**:
➡️ Uma função (ou classe) não deve depender de informações que ela não usa.

📌 Seu objetivo:
- Separar os atendimentos em funções menores e mais específicas
- Cada uma deve **pedir apenas os dados que realmente precisa**

💊 Contexto: diferentes atendimentos no balcão da farmácia
*/

// ❌ Código atual (quebrando ISP)
function atenderCliente(dadosCliente) {
    console.log("Atendendo cliente:", dadosCliente.nome);
  
    if (dadosCliente.receita) {
      console.log("Validando receita...");
    }
  
    if (dadosCliente.cartaoSus) {
      console.log("Consulta via SUS...");
    }
  
    console.log("Venda finalizada");
  }
  
  atenderCliente({
    nome: "Carlos",
    receita: null,
    cartaoSus: null
  });
  
  // TODO: Criar funções separadas:
  // - atendimentoVendaSimples
  // - atendimentoComReceita
  // - atendimentoViaSus
  // Cada uma deve receber só os dados que usa
  
  /*
  
  ✅ RESPOSTA SUGERIDA:
  
  function atendimentoVendaSimples(cliente) {
    console.log(`Atendendo ${cliente.nome} na compra simples.`);
  }
  
  function atendimentoComReceita(cliente, receita) {
    console.log(`Validando receita de ${cliente.nome}: ${receita.numero}`);
  }
  
  function atendimentoViaSus(cliente, cartaoSus) {
    console.log(`Consulta SUS para ${cliente.nome} com cartão ${cartaoSus}`);
  }
  
  // Testes:
  atendimentoVendaSimples({ nome: "Carlos" });
  atendimentoComReceita({ nome: "Ana" }, { numero: "RX123" });
  atendimentoViaSus({ nome: "Rafaela" }, "1234-5678");
  
  */