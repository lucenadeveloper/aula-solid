// ❌ Código fixo: depende diretamente da implementação

/*
🧠 Problemas:
- A função chama diretamente o serviço de envio de alerta
- É impossível simular ou trocar por outro tipo de alerta (ex: e-mail)
- Dificulta testes e mudanças futuras
*/

function enviarAvisoDeEstoque(produto) {
    const servico = new ServicoSMS(); // 😬 acoplado!
    servico.enviar(`O estoque de ${produto.nome} está baixo!`);
  }
  
  class ServicoSMS {
    enviar(mensagem) {
      console.log("Enviando SMS:", mensagem);
    }
  }