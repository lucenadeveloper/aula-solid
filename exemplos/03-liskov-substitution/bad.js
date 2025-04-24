// ❌ Quebra do Liskov – Subclasse muda o comportamento de forma perigosa

/*
🧠 Problemas:
- A classe `ClienteOnline` herda de `Cliente`, mas ignora o método de retirada física
- Isso quebra a substituição: nem todo Cliente pode ser tratado igual
*/

class Cliente {
    retirarNaLoja() {
      console.log("Produto retirado no balcão");
    }
  }
  
  class ClienteOnline extends Cliente {
    retirarNaLoja() {
      throw new Error("Cliente online não pode retirar na loja!");
    }
  }
  
  // Código genérico que espera que todos os clientes possam ser tratados igualmente
  function processarRetirada(cliente) {
    cliente.retirarNaLoja(); // 💥 Vai quebrar com ClienteOnline
  }
  
  const cliente1 = new Cliente();
  const cliente2 = new ClienteOnline();
  
  processarRetirada(cliente1); // ok
  processarRetirada(cliente2); // erro