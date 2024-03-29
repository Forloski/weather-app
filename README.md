# Weather App

## Demonstração

https://weather-app-neon-rho.vercel.app/

## Instalação

Fazer clone do projeto, entrar na pasta que foi clonado e executar

```sh
yarn install
```

Copie o **_.env_** fornecido para a raiz do projeto.

## Inicialização

Para iniciar em modo de desenvolvimento

```sh
yarn dev
```

Para fazer build do projeto

```sh
yarn build
```

Para executar em modo de produção

```sh
yarn start
```

## Tecnologias Utilizadas

[React](https://reactjs.org/)
[NextJS](https://nextjs.org/)
[TypeScript](https://www.typescriptlang.org/)
[Material UI](https://mui.com/)
[ReactQuery](https://react-query.tanstack.com/)
[RxJS](https://rxjs.dev/)
[Luxon](https://moment.github.io/luxon/#/)
[Emotion](https://emotion.sh/docs/introduction)

## Desenvolvimento

Esse teste foi desenvolvido durante minha primeira semana de recesso em mais de um ano, então optei por não sacrificar tempo com minha família nem minha saúde mental, assim não utilizei todo meu tempo disponível nessa semana para escrever código. Isto resultou em algumas features que acho essenciais ficando de fora, como os testes.

Um segundo ponto é o layout da página que mostra a previsão do tempo para a cidade selecionada. Eu queria fazer algo mais em linha com outros Apps, mas devido ao tempo ficou apenas um grid com as temperaturas de cada horário.

O backend utilizado foi o fornecido pelo NextJS, que eu particularmente não gostei, estou acostumado a utilizar o [NestJS](https://nestjs.com/) que é mais focado em OOP e consegue utilizar as funcionalidades do TS de maneira mais eficiente.

## Error Conhecidos

O OpenWeather disponiviliza uma lista com todas as cidades disponiveis e seus respectivos códigos, porém o arquivo tem 100mb de tamanho, o que torna sua utilização dependente de um backend completo com banco de dados e outras funcionalidades, o que adicionaria ainda mais ao tempo do projeto e acho que fugiria um pouco do escopo.

Uma alternativa que encontrei para poder ainda ter o a funcionalidade de procurar por qualquer cidade do mundo foi utilizar a API do Google Maps. Porém nem todos os dados retornados do autocomplete são compativeis com a API do OpenWeather, assim levando a algumas cidades a gerarem erro nas requests de previsão.

## Melhorias

Durante as próximas semanas/meses devo adicionar algumas funcionalidades que não consegui nessa versão para utilizar esse projeto num portfólio.

- Incluir testes unitarios utilizando [JestJS](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- Incluir testes e2e e integração utilizando [Cypress](https://www.cypress.io/)
- Alterar a maneira que a permissão para obter geolocalização é requerida.
- Tratar os dados recebidos para obter médias diárias das previsões.
- Alterar o layout da página de previsão do tempo das cidades.
- Criar placeHolders para componentes que ainda não carregaram.
- Criar loading para feedback quando o usuario clica em 'Ver Previsão' e 'Minha Cidade'.
- Criar um back-end completo para busca de cidades utilizando o ID que o OpenWeather fornece.

## Considerações

Emotion foi utilizado no lugar do Styled-Components devido ao primeiro ser o default da MUI, para utilizar o segundo como engine de estilização alguma configurações extras precisam ser feitas, e devido ao wrapper que a MUI faz em volta dessas duas duas engines achei desnecessário gastar tempo com isso. Existe também o fato que as duas bibliotecas são extremamente similares, a ponto que a decisão de utilizar um ou outro fica apenas no bundle size e performance, onde o Emotion tem uma vantagem considerável.
