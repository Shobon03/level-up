# LEVL^

Olá 👋, seja bem vindo ao repositório do **LEVL^**.

## 📝 Tabela de conteúdos

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Premissa](#--premissa)
  - [Imagens](#-imagens)
- [Coisas aprendidas](#-coisas-aprendidas)
- [Como executar](#-como-executar)
- [TODO](#-todo)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

## 🤔 Sobre o projeto

Esse projeto foi desenvolvido na 4.ª edição da Next Level Week (NLW), realizada em 22 a 26 de fevereiro de 2021. O nome original do projeto desenvolvido é "Move it".

## 👨‍💻 Tecnologias utilizadas

- Next.js e React -> Front-end;
- [Tippy.js](https://github.com/atomiks/tippyjs-react) com integração ao React -> Popovers.

## 🤸‍♂️ Premissa

O **LEVL^** (level up) é um aplicativo com o intuito de nós, devs, fazermos uma pausa para fazer algum exercício, se alongar, etc, uma vez que passamos a maior parte do tempo na frente do computador. Foi feito como se fosse um jogo em que, a cada vez que conseguimos realizar algum exercício, ganhamos pontos de xp e subimos de nível. Mas, o mais importante de tudo isso é que nós estamos melhorando nossa saúde.

### 👀 Imagens 

TODO :D

![]()

![]()

![]()


## 😎 Coisas aprendidas

No meu caso...
- Estados no React;
- Contextos no React e como os componentes podem se comunicar uns com os outros;
- Importação de estilos CSS por meio de módulos;
- Interfaces no Typescript;
- Um pouco sobre o Next.js:
  - que as páginas podem ver tudo o que está na pasta ```public```;
  - que temos que ter os arquivos e o que vai em cada um: ```_app.tsx```, ```_document.tsx``` e ```index.tsx``` *(.tsx caso utilizamos o TypeScript)*;
- Como guardar informações em cookies usando o Javascript;
- Como usar o ```getServerProps()``` do Next.js para pegar as informações dos cookies.

## ✨ Como executar

Para executar em sua máquina, faça os seguintes passos:
1. Instale o Node.js e o Yarn;
2. Crie um app next;
    ```
    yarn create next-app ${nome do projeto} --template-typescript
    ```
3. Instale as dependências; 
    ```
    yarn add ${nome da dependência} -D
    ```
  - Typescript:
    - ```typescript```;
    - ```@types/react```;
    - ```@types/react-dom```;
    - ```@types/node```.
  - Cookies:
    - ```@types/js-cookie```.
  - Tippy.js + React:
    - ```@tippyjs/react``` (Tippy.js).
4. Em um terminal na pasta root do projeto, execute o yarn na forma de desenvolvimento 
   ```
   yarn dev
   ```
5. *Voilá!* Seu app já vai estar rodando no navegador na url: ```localhost:3000```.

## 📝 TODO

Ainda há algumas coisas pendentes que desejo realizar:
- Fazer a troca de temas;
- Fazer a autenticação com o GitHub, para mostrar o nome de usuário e a foto de perfil de quem vai utilizar;
- Fazer uma sessão que não necessite de perfil também. Nesse caso, quem estiver usando poderá colocar um nome e uma imagem de perfil (que está no armazenamento do computador);
- Deixar a página mais responsiva;
- Fazer o deploy na Vercel.

## 🙌 Agradecimentos

Agradeço ao pessoal da Rocketseat, por ter compartilhando esse conhecimento de tão grande valor e com uma excelente qualidade nessa semana, com o foco do que está sendo mais usado hoje e, ainda mais, me levando para o próximo nível.

**E agradeço a você por ter passado aqui! (っ˘ω˘ς )**

## 📖 Licença

Este projeto está sob a licença AGPL-3.0.
