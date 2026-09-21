# Testes Automatizados — Busca de Pessoas por CPF

Suíte de testes automatizados construída em Node.js com Mocha, validando o fluxo de busca de pessoas por CPF.

## O problema

Fluxos de busca por identificador único (CPF) são um ponto crítico de qualidade: precisam lidar corretamente com entradas válidas, inválidas, formatação inconsistente e casos de borda — falhas aqui geram bugs silenciosos difíceis de rastrear em produção.

## Abordagem

- Suíte estruturada em casos positivos, negativos e de borda
- Validação de formatação e regras de negócio do CPF
- Organização dos testes por cenário, facilitando manutenção e leitura dos relatórios

## Stack

`Node.js` · `Mocha` · `JavaScript`

## Como rodar

\`\`\`bash
npm install
npm test
\`\`\`
