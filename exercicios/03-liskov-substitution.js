// 🧠 EXERCÍCIO – LSP: Substituir sem quebrar

/*
Desafio:
O sistema da farmácia tem dois tipos de cliente: presencial e online.

O problema é que os dois herdam da mesma classe `Cliente`, mas o cliente online **quebra o sistema** quando a função de retirada na loja é chamada.

Isso **viola o princípio de substituição de Liskov**, pois nem toda subclasse está se comportando como a classe base promete.

➡️ Sua missão é reorganizar o código para que as classes se comportem corretamente, sem quebrar quando forem usadas de forma genérica.

📌 Dica:
- Use herança ou composição apenas quando o comportamento for **compatível**
- Não force uma subclasse a ter métodos que ela não vai usar
*/

// ❌ Código atual (quebrando o LSP)
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

function processarRetirada(cliente) {
    cliente.retirarNaLoja(); // 💥 Vai quebrar com ClienteOnline
}

const cliente1 = new Cliente();
const cliente2 = new ClienteOnline();

processarRetirada(cliente1);
processarRetirada(cliente2); // erro aqui 😬

// TODO: Reestruturar as classes para que cada uma represente seu comportamento de forma segura
// TODO: Evitar métodos que não fazem sentido para certos tipos de cliente
// TODO: Fazer com que `processarRetirada` funcione sem quebrar, mesmo com tipos diferentes

/*
 
✅ RESPOSTA SUGERIDA:
 
class ClientePresencial {
  retirarNaLoja() {
    console.log("Produto retirado no balcão");
  }
}
 
class ClienteOnline {
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
 
processarRetirada(cliente1); // ok
processarRetirada(cliente2); // aviso amigável
 
*/