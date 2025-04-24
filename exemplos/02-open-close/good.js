// ✅ EXEMPLO BOM – Aplicando OCP corretamente
// - Exemplo super simples, ele fere alguns outros princípios fora do SOLID
/*
🧠 Por que está melhor?
- A lógica de cálculo está separada por tipo de cliente, em **estratégias reutilizáveis**
- Podemos adicionar novas regras sem alterar a função principal
- Isso permite **estender o comportamento**, sem mexer no que já existe (Open/Closed na prática!)
*/


// Utilizar um switch case também seria uma boa aqui
const regrasDesconto = {
    comum: () => 0,
    fidelidade: () => 0.1,
    funcionario: () => 0.2,
    conveniado: () => 0.15, // ➕ nova regra adicionada sem tocar na lógica principal
  };
  
  function calcularDesconto(cliente) {
    const regra = regrasDesconto[cliente.tipo] || (() => 0);
    return regra();
  }