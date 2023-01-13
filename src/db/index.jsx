import Projects from "../components/Projects"

const projectsList = [
  {
    name: 'MongoDB Commerce',
    describe: 'Querys para buscar dados em um banco de dados NoSQL - MongoDb',
    text: 'Esse projeto possuiu uma série de desafios com diferentes níveis de complexidade. Cada desafio foi resolvido em seu arquivo próprio. Como retornar a quantidade de documentos inseridos na coleção produtos, ordenar a coleção com alguns critérios, filtrando campos a ser exibidos, criei uma query que inseriam em uma coleção um documento com campos variados e também querys que removiam items, entre outros comandos... Esse projeto, foi trabalhado com o banco de dados commerce, que contém dados do cardápio do McDonald\'s, como ingredientes, valores nutricionais e dados fictícios de vendas.',
    href: 'https://github.com/rodriguestg/gabriel-rodrigues-mongodb-commerce',
    link: '/MongoDB',
    demo: {
      img: '',
      video: '',
    },
    elem: <Projects project="MongoDB Commerce" />,
    web: '',
  },
  {
    name: 'Trybe Futebol Clube!',
    describe: 'Simulação de um campeonato, com desenvolvimento de funções backend com servidor MySQL',
    text: 'O TFC é um site informativo sobre partidas e classificações de futebol! Este projeto consiste em uma API (onde utilizei o método TDD) e também integrei - através do docker-compose - as aplicações para que elas funcionasse consumindo um banco de dados. Foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize. Respeitando regras de negócio que foram estabelcidas no projeto e a API sendo capaz de ser consumida por um front-end que já veio junto com o projeto. Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end que o usuária vê.',
    href: 'https://github.com/rodriguestg/gabriel-rodrigues-tfc',
    link: '/TrybeFutebolClube',
    demo: {
      img: 'https://drive.google.com/file/d/1hmfImlEeixwfLTv7MUrzwLi_Y8kcg19x/preview',
      video: '',
    },
    elem: <Projects project="Trybe Futebol Clube!" />,
    web: '',
  },
  {
    name: 'App de Receitas',
    describe: 'Um app de receitas, que utiliza o que há de mais moderno dentro do ecossistema React: Hooks e Context API!',
    text: 'Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks! A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas. O layout tem como foco dispositivos móveis, dessa forma o protótipo foi desenvolvido para telas menores. Habilidades: Redux para gerenciar estado, a biblioteca React-Redux, a Context API do React para gerenciar estado, o React Hook useState, o React Hook useContext, o React Hook useEffect, Hooks customizados, Local Storage e Bootstrap.',
    href: 'https://github.com/rodriguestg/gabriel-rodrigues-g17-app-receitas',
    link: '/AppdeReceitas',
    demo: {
      img: '',
      video: '',
    },
    elem: <Projects project="App de Receitas" />,
    web: '',
  },
  {
    name: 'Carrinho de Compras',
    describe: 'Foi desenvolvido um carrinho de compras totalmente dinâmico!',
    text: 'Este projeto consome dados diretamente de uma API do Mercado Livre! Ele foi posto em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! Contém os arquivos index.html, style.css e script.js, onde estão os códigos HTML, CSS e JavaScript, respectivamente. Nele são criamos elementos através do DOM, é adicionado produtos no carrinho de compras e salvos no LocalStorage, assim mesmo após atualizar, as compras pemanecem no carrinho.',
    href: 'https://github.com/rodriguestg/gabriel-rodrigues-shopping-cart',
    link: '/CarrinhoDeCompras',
    demo: {
      img: 'https://drive.google.com/file/d/1-vFnIcqpK2y3VNMiPXiY3wSQU7fCr6Uq/preview',
      video: 'https://drive.google.com/file/d/1-vFnIcqpK2y3VNMiPXiY3wSQU7fCr6Uq/preview',
    },
    elem: <Projects project="Carrinho de Compras" />,
    web: '',
  },
  {
    name: 'Front-End Online Store',
    describe: 'Buscar produtos por termos e categorias a partir de uma API do Mercado Livre.',
    text: 'Este projeto existe uma versão simplificada, sem persistência no banco de dados, de uma loja online, foi um projeto desenvolvido em grupo de acordo com demandas definidas em um quadro Kanban, em um cenário próximo ao do mercado de trabalho.',
    href: 'https://github.com/rodriguestg/gabriel-rodrigues-g25-frontend-online-store',
    link: '/FrontEndOnlineStore',
    demo: {
      img: '',
      video: '',
    },
    elem: <Projects project="Front-End Online Store" />,
    web: '',
  },
];

const projectsPI = [
  projectsList[3],
  projectsList[1],
  { name: 'Ver +', describe: 'Conheça alguns dos principais projetos já concluídos', link: '/portfolio' }
];

const techs = ['JavaScript', 'TypeScript', 'React', 'Node.Js', 'MySQL', 'Jest', 'RTL', 'Redux', 'API Context', 'HTML5', 'CSS', 'GIT', 'Metodologias Ágeis', 'Moodle'];
const skills = ['TDD', 'ORM', 'JWT', 'MongoDB', 'Python'];

export {
  projectsPI,
  projectsList,
  techs,
  skills,
}