import Head from "next/head";
import Card from "./components/Card";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-between md:justify-end items-center md:items-stretch max-w-5.3 ml-0 mr-auto">
        <Card imageLink="/images/montyhall.png" width="500" height="500" url="https://monty-hall-xi.vercel.app" title="Problema de Monty Hall" description="Site construído em 2020 usando Vue, com o objetivo de ilustrar o problema de monty hall." repository="https://github.com/joelvitorniino/montyhall" />
        <Card imageLink="/images/calculator.png" width="500" height="500" url="https://calculator-react-5c128.web.app" title="Calculadora React" description="Calculadora construída em 2020 com React. Com o objetivo de treinar a lógica e reforçar as bases do React e TypeScript.  " repository="https://github.com/joelvitorniino/calculator-react/tree/master" />
        <Card imageLink="/images/flappybird.png" width="500" height="500" url="https://joelvitorniino.github.io" title="Flappy Bird" description="Jogo do Flappy Bird feito em 2020 com JS puro." repository="https://github.com/joelvitorniino/joelvitorniino.github.io" />
        <Card imageLink="/images/api-wikipedia.png" width="500" height="500" url="https://github.com/joelvitorniino/api-wikipedia" title="Api Wikipedia" description="Projeto feito com Flask que consiste em servir uma api da wikipedia de consumo fácil a qualquer um interessado!" repository="https://github.com/joelvitorniino/api-wikipedia" />
        <Card imageLink="https://cdn-icons-png.flaticon.com/512/4711/4711987.png" width="275" height="275" url="https://github.com/joelvitorniino/joel-bot" title="Joel Bot" description="Bot de whatsapp desenvolvido com TypeScript com o uso da API Baileys!" repository="https://github.com/joelvitorniino/joel-bot" />
        <Card imageLink="https://cdn-icons-png.flaticon.com/512/4711/4711987.png" width="251" height="251" url="https://github.com/joelvitorniino/niino-bot" title="Niino Bot" description="Bot desenvolvido em Typescript com a API Open-wa! Este projeto foi o responsável por consolidar a minha lógica." repository="https://github.com/joelvitorniino/niino-bot"  />
        <Card imageLink="https://cdn-icons-png.flaticon.com/512/4711/4711987.png" width="251" height="251" url="https://github.com/joelvitorniino/livinho-bot" title="Livinho Bot" description="Bot desenvolvido em Typescript com a API Baileys! Este projeto foi desenvolvido e mantido durante 6 meses!" repository="https://github.com/joelvitorniino/livinho-bot" />
        <Card imageLink="/images/pokenext.png" width="500" height="500" url="https://pokenext-one-virid.vercel.app" title="Pokenext" description="Site desenvolvido com NextJS com a premissa de consumir API do Pokémon e mostrar em cards!" repository="https://github.com/joelvitorniino/pokenext" />
        <Card imageLink="/images/chat-rocketseat.png" width="500" height="500" url="https://github.com/joelvitorniino/chatbot-rocketseat" title="Chat Bot Rockeseat" description="Chat Bot desenvolvido em Express aproveitando o estilo do chat da rocketseat, acrescentando banco de dados, login, registro, logar com google e recuperação de senha.'" repository="https://github.com/joelvitorniino/chatbot-rocketseat" />
        <Card imageLink="/images/chat-rocketseat-nextjs.png" width="500" height="500" url="https://chatbot-rocketseat-nextjs.vercel.app/" title="Chat Bot Rockeseat NextJS" description="A segunda versão do Chat bot feito em express, agora feito em NextJS e TailwindCSS!" repository="https://github.com/joelvitorniino/chatbot-rocketseat-nextjs" />
      </div>
    </>
  );
}
