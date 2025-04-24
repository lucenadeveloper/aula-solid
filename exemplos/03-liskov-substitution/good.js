// ✅ Aplicação correta do Liskov – comportamento coerente e seguro

/*
🧠 Por que está melhor?
- Agora as classes refletem comportamentos compatíveis
- O código genérico trata todos os tipos de cliente sem quebrar
- A retirada foi separada por capacidade de tipo, evitando herança forçada
*/

class Cliente {
    // base abstrata: sem definir como será a entrega
  }
  
  class ClientePresencial extends Cliente {
    retirarNaLoja() {
      console.log("Produto retirado no balcão");
    }
  }
  
  class ClienteOnline extends Cliente {
    agendarEntrega() {
      console.log("Entrega agendada via transportadora");
    }
  }
  
  function processarRetirada(cliente) {
    if (cliente instanceof ClientePresencial) {
      cliente.retirarNaLoja();
    } else {
      console.log("Este tipo de cliente não retira na loja.");
    }
  }
  
  const cliente1 = new ClientePresencial();
  const cliente2 = new ClienteOnline();
  
  processarRetirada(cliente1); // ✅ Produto retirado no balcão
  processarRetirada(cliente2); // ✅ Mensagem amigável