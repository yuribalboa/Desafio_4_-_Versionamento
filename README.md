# Organizador de Tarefas React

Este é um organizador de tarefas feito com React, que permite ao usuário adicionar, editar, excluir e marcar tarefas como concluídas. Além disso, o projeto inclui modais personalizados para confirmar ações como edição ou exclusão de tarefas. 

## Funcionalidades

### Adicionar Nova Tarefa:
- O usuário pode digitar uma nova tarefa no campo de input.
- Ao pressionar "Enter" ou clicar no botão "+", a tarefa é adicionada à lista.

### Marcar Tarefas Como Concluídas:
- Cada tarefa possui uma caixa de seleção para que o usuário marque como concluída ou desmarque, alterando seu estado.

### Editar Tarefa:
- Ao clicar no ícone de edição, o usuário pode abrir um modal para alterar a descrição da tarefa.
- A edição é confirmada após clicar em "Sim" ou cancelada com "Não".

### Excluir Tarefa:
- O usuário pode excluir uma tarefa clicando no ícone de lixeira.
- Um modal aparece para confirmar a exclusão, com opções "Sim" ou "Não".

### Mensagens Personalizadas:
- Caso nenhuma tarefa esteja cadastrada, uma mensagem indicando "Nenhuma tarefa adicionada ainda." é exibida.

## Estrutura de Arquivos
/src /components - Header.js - Content.js - Header.module.css - Content.module.css /assets - edit.svg - delete.svg

index.js
App.js
index.css
markdown

## Tecnologias Utilizadas
- **React.js**: Framework JavaScript para construção de interfaces de usuário.
- **CSS Modules**: Estilização local para componentes React.
- **SVG**: Ícones de edição e exclusão.

## Branches
O projeto utiliza o Git Flow, com duas branches principais:

main: Branch de produção.
develop: Branch para desenvolvimento de novas funcionalidades

## Demonstração

https://github.com/user-attachments/assets/c47a112d-3dda-450c-9431-5e7e34a44557


