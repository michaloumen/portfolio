const texts = {
  en: {
    navigation: {
      home: 'Home',
      technologies: 'Technologies',
      portfolio: 'Portfolio'
    },
    intro: (diffInYears) => (
      <>
        Hello, I'm Michelle Mendonça and I have over {diffInYears} years of professional experience in fullstack development.<br /><br />
        I have many types of interests and curiosities that have led me to develop skills including web development, mountain biking, playing the piano and drawing.<br /><br />
        My journey in development began in 2020 during the pandemic when I decided to learn Javascript. I took courses, online tutorials, self-studied, and got interested in a lot of documentation. In 2021, I started my career transition from dentist to programmer. And here I am since then! I am currently pursuing my second degree in Internet Systems.<br /><br />
        I am always excited to learn and explore new things, both in my personal and professional life, and I enjoy sharing my knowledge with others.<br /><br />
        If you need help or want to exchange knowledge, connect with me by clicking on the icons for LinkedIn, GitHub, or Email!
      </>

    ),
    landing: {
      whoAmI: 'Who am I?',
      typewritter: [
        ' ',
        'A Software Developer',
        'Frontend Developer',
        'Backend Developer',
        'Or',
        'Just Micha xD',
        ' '
      ]
    },
    contactMenu: 'Copied email!',
    technologies: {
      header: 'Some of the technologies I use',
      subtitle: 'There is no reason to put that same list on a carousel. But I wanted to do it anyway!',
      clickHere: 'Click here and see',
      back: 'Back to previous view'
    },
    portfolio: {
      header: 'My projects',
      subtitle: (
        <>Here you’ll find some of my projects. <strong>Click on the images</strong> to learn more about each one</>
      )
    },
    portfolioItems: [
      {
        header: 'This site!',
        description: 'This site you\'re lookin at now - Built with atomic design, responsiveness and reusable components in mind. It\'s It\'s a showcase of what can be achieved with React, including features like modals, carousels, and language translation.'
      },
      {
        header: 'Calculating cost per project',
        description: 'This calculation aims to meet business needs for project costs by considering execution time and overlapping with other projects. The function accounts for the variation in days per month and distributes the cost equitably among the projects running concurrently within the same period.'
      },
      {
        header: 'Express.js API',
        description: 'Project to practice building an API using Express.js, Middleware, Handlebars, Next.js, and MVC (Model-View-Controller). Through routes, it allows adding friends via POST requests to /friends. Additionally, you can view the complete list of friends or get information about a specific friend based on the provided ID.'
      },
      // {
      //   header: 'MERN Product Show Case',
      //   description: 'Currently, I am working on this project, so it is under construction. I am creating a showcase of dental products with the intention of building a fullstack project using the MERN stack (MongoDB, Express, React, and Node) - in addition to, of course, selling my dental materials!'
      // },
      {
        header: 'Swagger Setup',
        description: 'This study project was created to set up Swagger and understand how it facilitates API documentation. The implementation aims to provide clear and interactive documentation for the endpoints, making it easier to visualize and test the routes.'
      },
      {
        header: 'Property Rental',
        description: 'This ongoing project is a real estate rental website that uses Tailwind, Node and Next with App Router. It integrates MongoDB Atlas, Google authentication and image uploads through Cloudinary. It includes CRUD functionalities for properties with authenticated and authorized routes, and a bookmarking feature to save properties. Users can register and rent properties through the platform.'
      }
    ],
    portfolioDialogButton: 'Know more'
  },
  ptbr: {
    navigation: {
      home: 'Início',
      technologies: 'Tecnologias',
      portfolio: 'Portfólio'
    },
    intro: (diffInYears) => (
      <>
        Olá, sou a Michelle Mendonça e tenho mais de {diffInYears} anos de experiência profissional em desenvolvimento fullstack.<br /><br />
        Tenho muitos tipos de interesses e curiosidades que me levaram a desenvolver algumas habilidades incluindo desenvolvimento web, mountain bike, tocar piano e desenhar.<br /><br />
        Minha jornada no desenvolvimento começou em 2020 durante a pandemia, quando decidi aprender Javascript. Fiz cursos, tutoriais online, aprendi sozinha e me interessei por muita documentação. Em 2021 iniciei minha transição de carreira de dentista para programadora. E aqui estou desde então! Atualmente iniciei minha segunda graduação em Sistemas para Internet.<br /><br />
        Estou sempre animada para aprender e explorar coisas novas, tanto na minha vida pessoal quanto profissional e gosto de compartilhar meu conhecimento com outras pessoas.<br /><br />
        Se você busca ajuda ou quer trocar conhecimento, se conecte comigo clicando nos ícones do Linkedin, Github ou E-mail!
      </>
    ),
    landing: {
      whoAmI: 'Quem sou eu?',
      typewritter: [
        ' ',
        'Desenvolvedora de Software',
        'Desenvolvedora Frontend',
        'Desenvolvedora Backend',
        'Ou',
        'Apenas Micha xD',
        ' '
      ]
    },
    contactMenu: 'Email copiado!',
    technologies: {
      header: 'Algumas das tecnologias que uso',
      subtitle: 'Não existe nenhum motivo para colocar essa mesma lista em um carrossel. Mas eu quis fazer mesmo assim!',
      clickHere: 'Clique aqui e veja',
      back: 'Volte para a visualização anterior'
    },
    portfolio: {
      header: 'Meus projetos',
      subtitle: (
        <>Aqui você encontrará alguns dos meus projetos. <strong>Clique nas imagens</strong> para descobrir mais sobre cada um deles</>
      ),
      clickHere: 'página do GitHub'
    },
    portfolioItems: [
      {
        header: 'Esse site!',
        description: 'Esse site que você está vendo agora - construído com atomic design, responsividade e componentes reaproveitáveis. Uma forma de mostrar o que é possível fazer com React: como modal, carrossel e tradução de idiomas.'
      },
      {
        header: 'Cálculo custo por projeto',
        description: 'Este cálculo tem como objetivo atender às necessidades empresariais de custo por projeto, considerando o tempo de execução e a simultaneidade com outros projetos. A função leva em conta a variação de dias no mês e distribui o custo de forma equitativa entre os projetos em andamento no mesmo período.'
      },
      {
        header: 'API Express.js',
        description: 'Projeto para exercitar construção de API usando Express.js, Middleware, Handlebars, Next.js e MVC (Model-View-Controller). Através de rotas, permite adicionar amigos por meio de solicitações POST em /friends. Além disso, é possível ver a lista completa de amigos ou obter informações sobre um amigo específico com base no ID fornecido.'
      },
      // {
      //   header: 'MERN Vitrine de Produtos',
      //   description: 'Atualmente estou trabalhando nesse projeto, por isso ele está em construção. Estou criando uma vitrine de produtos odontológicos com a intenção de construir um projeto fullstack usando a stack MERN (MongoDB, Express, React e Node) - além de, é claro, vender meus materiais odontológicos!'
      // },
      {
        header: 'Swagger Setup',
        description: 'Este projeto é um estudo para configurar o Swagger e entender como ele pode melhorar a documentação da API. A implementação visa fornecer uma documentação clara e interativa para os endpoints da API, facilitando a visualização e o teste das rotas.'
      },
      {
        header: 'Aluguel de Imóveis',
        description: 'Este projeto em construção é um site de aluguel de imóveis que utiliza Tailwind, Node e Next com App Router. Integra MongoDB Atlas, autenticação Google e upload de imagens via Cloudinary. Inclui funcionalidades de CRUD para propriedades com rotas autenticadas e autorizadas, e uma funcionalidade de bookmarks para salvar imóveis. Os usuários podem se cadastrar e realizar o aluguel de imóveis através da plataforma.'
      }
    ],
    portfolioDialogButton: 'Saiba mais'
  },
};

export default texts;