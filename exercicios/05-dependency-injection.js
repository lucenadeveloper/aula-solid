// 🧠 EXERCÍCIO – DIP: Inversão de dependência

/*
Desafio:
A farmácia quer enviar alertas quando o estoque de um medicamento estiver baixo.

Hoje, o código está **acoplado** a um serviço de SMS — e não conseguimos trocar para e-mail, push ou log sem reescrever tudo.

➡️ Sua missão é aplicar o princípio da inversão de dependência (DIP):
- Separar a lógica de envio da lógica de regra de negócio
- Permitir usar qualquer serviço de notificação, sem acoplamento

📌 Dica:
- Use uma função ou classe externa como "serviço" e **passe ela como parâmetro**
*/

// ❌ Código atual (acoplado ao SMS)
function enviarAvisoDeEstoque(produto) {
    const servico = new ServicoSMS(); // 😬 fixo
    servico.enviar(`O estoque de ${produto.nome} está baixo!`);
  }
  
  class ServicoSMS {
    enviar(mensagem) {
      console.log("📱 SMS:", mensagem);
    }
  }
  
  const dipirona = { nome: "Dipirona" };
  enviarAvisoDeEstoque(dipirona);
  
  // TODO: Refatore para permitir passar qualquer tipo de serviço de envio
  // TODO: Crie um segundo serviço, como email, e use os dois
  
  /*
  
  ✅ RESPOSTA SUGERIDA:
  
  function enviarAvisoDeEstoque(produto, servicoNotificacao) {
    servicoNotificacao.enviar(`O estoque de ${produto.nome} está baixo!`);
  }
  
  class ServicoSMS {
    enviar(mensagem) {
      console.log("📱 SMS:", mensagem);
    }
  }
  
  class ServicoEmail {
    enviar(mensagem) {
      console.log("📧 E-mail:", mensagem);
    }
  }
  
  const produto = { nome: "Dipirona" };
  
  enviarAvisoDeEstoque(produto, new ServicoSMS());
  enviarAvisoDeEstoque(produto, new ServicoEmail());
  
  */