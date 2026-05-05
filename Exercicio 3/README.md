# Sistema de Reservas (TypeScript + POO)

## 📌 Decisões de Modelagem

O projeto foi estruturado seguindo princípios de Programação Orientada a Objetos para garantir organização, extensibilidade e baixo acoplamento.

- **Polimorfismo:** Cada tipo de acomodação (`House`, `Apartment`, `SharedRoom`) é responsável por calcular seu próprio preço.

- **Separação de responsabilidades:**
  - Acomodação → cálculo do preço base  
  - Taxas (`Fee`) → cálculo de encargos adicionais  
  - `PricingService` → aplicação das taxas  
  - `Booking` → orquestração da reserva  

- **Composição:** As taxas são injetadas no `PricingService`, permitindo adicionar ou remover regras sem alterar o restante do sistema.

- **Extensibilidade:** Novos tipos de acomodação ou taxas podem ser adicionados sem necessidade de modificar código existente.

---

## 🚀 Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar o projeto
```bash
npm start
```
