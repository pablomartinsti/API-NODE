# 📊 Sistema de Gestão Contábil – Envio de Documentos e Cobranças

Sistema para organização de documentos contábeis entre clientes e escritório, com automação de obrigações fiscais e cobranças de honorários.

Versão inicial focada em:

- controle de documentos
- validação pelo contador
- alertas automáticos
- base para módulo financeiro

---

## 🎯 Objetivo

Centralizar:

- envio e recebimento de documentos
- controle de pendências mensais
- automação de lembretes
- organização por empresa e regime tributário

---

## 👥 Perfis de Usuário

### ADMIN

- Gerencia usuários
- Vincula contadores às empresas
- Gerencia áreas contábeis
- Acesso total

### CONTADOR

- Acessa empresas vinculadas
- Define regime tributário e tipo de atividade
- Cria/ativa obrigações
- Valida documentos
- Envia guias e relatórios

### CLIENTE

- Cadastra empresas
- Envia documentos
- Acompanha status

---

## 🏢 Empresas

Cada empresa possui:

- CNPJ
- razão social
- regime tributário (MEI, Simples, Presumido, Real)
- tipo de atividade (Serviço, Comércio, Mista)
- status (ativa/inativa)

---

## 📂 Áreas Contábeis

- Fiscal
- Contábil
- Pessoal
- Legalização

---

## 📋 Obrigações

Cada empresa possui obrigações definidas por:

- regime tributário
- tipo de atividade
- área contábil
- vencimento
- frequência

Podem ser:

- obrigatórias
- opcionais (ativadas pelo contador)

---

## 📄 Documentos

Relacionados a obrigações específicas.

Campos principais:

- mês de referência
- arquivo em nuvem
- status

### Status:

- PENDENTE
- ENVIADO
- APROVADO
- REJEITADO

---

## 🔄 Fluxo Principal

1. Cliente cadastra empresa
2. Contador define regime e atividade
3. Sistema gera obrigações
4. Sistema cria pendências mensais
5. Cliente envia documentos
6. Contador valida

---

## 🔔 Automações

### 📑 Documentos

- alerta antes do vencimento
- alerta no vencimento
- alerta de atraso

---

### 💰 Honorários

- cobrança mensal automática
- aviso 10 dias antes
- aviso no vencimento
- cobrança de atraso

### 🎁 13º Honorário

- gerado automaticamente em dezembro
- vencimento em 15/12

---

## 🧠 Regras principais

- Cliente cria empresa
- Contador configura parte fiscal
- Documentos podem ser enviados por cliente ou contador
- Apenas contador valida
- Sistema automatiza prazos e cobranças

---

## 🏗 Modelo de Dados

Entidades principais:

- Usuario
- Empresa
- ContadorEmpresa
- Area
- Obrigacao
- Documento

---

## 🚀 Tecnologias (previstas)

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker
- Storage em nuvem

---

## 📈 Roadmap

### Versão 1 (MVP)

✔ Documentos  
✔ Obrigações  
✔ Validação  
✔ Alertas

## 📄 Status do Projeto

Versão 1 – modelagem concluída e início do desenvolvimento backend.
