Organizador de Tarefas React
Este é um organizador de tarefas feito com React, que permite ao usuário adicionar, editar, excluir e marcar tarefas como concluídas. Além disso, o projeto inclui modais personalizados para confirmar ações como edição ou exclusão de tarefas.

Funcionalidades
Adicionar Nova Tarefa:

O usuário pode digitar uma nova tarefa no campo de input.
Ao pressionar "Enter" ou clicar no botão "+", a tarefa é adicionada à lista.
Marcar Tarefas Como Concluídas:

Cada tarefa possui uma caixa de seleção para que o usuário marque como concluída ou desmarque, alterando seu estado.
Editar Tarefa:

Ao clicar no ícone de edição, o usuário pode abrir um modal para alterar a descrição da tarefa.
A edição é confirmada após clicar em "Sim" ou cancelada com "Não".
Excluir Tarefa:

O usuário pode excluir uma tarefa clicando no ícone de lixeira.
Um modal aparece para confirmar a exclusão, com opções "Sim" ou "Não".
Mensagens Personalizadas:

Caso nenhuma tarefa esteja cadastrada, uma mensagem indicando "Nenhuma tarefa adicionada ainda." é exibida.
Estrutura de Arquivos
markdown
Copiar código
/src
  /components
    - Header.js
    - Content.js
    - Header.module.css
    - Content.module.css
  /assets
    - edit.svg
    - delete.svg
  - index.js
  - App.js
  - index.css
Tecnologias Utilizadas
React.js: Framework JavaScript para construção de interfaces de usuário.
CSS Modules: Estilização local para componentes React.
SVG: Ícones de edição e exclusão.
Como Executar o Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
O projeto estará disponível em: http://localhost:3000.

Branches
O projeto utiliza o Git Flow, com duas branches principais:

main: Branch de produção.
develop: Branch para desenvolvimento de novas funcionalidades.