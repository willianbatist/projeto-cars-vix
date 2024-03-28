### Observação

Este repositório contem o **Projeto Catálogo de automóveis** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.



### Resultado obtido:

https://github.com/willianbatist/projeto-cars-vix/assets/91439283/ec1c05d2-ce34-44f4-ae7e-4cdf3b90d3d9


#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - UX/UI

#### Tecnologias utilizadas:

  - React/Next;
  - TypeScript;
  - chakra-ui;
  - CSS;
  - HTML;
  - eslint;
  - vscode;

---

## Apresentação do Projeto

Sistema de agendamento para barbearia ClickBeard para ajudar com a organização.

Observação é necessário ter o node instalado e docker-compose.

## Inciando o projeto

Para da start no projeto, basta realizar o download ou clonar esse repositório.

Dentro do repositório, entre na pasta backend no terminal e instale as lib:

    npm install

Para roda o banco de dados:

    docker-compose up -d

Para subir as tabelas:

    prisma migrate deploy

É necessario popular o banco com algumas informações, suba a seed com o comando:

    npx prisma db seed

Agora basta da start no backend:

    npm start

vai ficar ativo na rota:  http://localhost:3001/


