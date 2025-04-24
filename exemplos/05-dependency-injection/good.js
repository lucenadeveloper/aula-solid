// ✅ Código flexível: recebe o serviço de fora (injeção de dependência)

/*
🧠 Por que está melhor?
- A função não depende de uma implementação específica
- Podemos usar qualquer tipo de serviço: SMS, e-mail, log interno...
- Mais fácil de testar, manter e trocar comportamentos
*/

function enviarAvisoDeEstoque(produto, servicoNotificacao) {
    servicoNotificacao.enviar(`O estoque de ${produto.nome} está baixo!`);
  }
  
  class ServicoSMS {
    enviar(mensagem) {
      console.log("📱 SMS enviado:", mensagem);
    }
  }
  
  class ServicoEmail {
    enviar(mensagem) {
      console.log("📧 Email enviado:", mensagem);
    }
  }
  
  // Podemos escolher qual serviço usar
  const produto = { nome: "Dipirona" };
  enviarAvisoDeEstoque(produto, new ServicoSMS());
  enviarAvisoDeEstoque(produto, new ServicoEmail());