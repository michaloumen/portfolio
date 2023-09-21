const texts = {
  en: {
    navigation: {
      home: 'Home',
      technologies: 'Technologies',
      portfolio: 'Portfolio'
    },
    intro: (diffInYears) => `Hi, my name is Michelle, and I have over ${diffInYears} years of experience in fullstack development.
    My journey so far has been incredible, and I'm looking forward to keep learning and contributing to new solutions.
    If you're looking for assistance or want to exchange ideas, connect with me by clicking on the Linkedin, Github, or Email icons!`,    
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
      clickHere: 'Click here to see Carousel mode 🎠',
      back: 'Back to previous view'
    },
    portfolio: {
      header: 'My projects',
      subtitle: 'Here you will find some of my repositories. To see all of them, visit my',
      clickHere: 'GitHub page.'
    },
    portfolioItems: [
      {
        header: 'Portfolio',
        description: 'You\'re looking at a portfolio on a portfolio website. That\'s right, you\'ve just entered a loop! This project was designed with atomic design, responsiveness, and reusable components in mind. It\'s a showcase of what can be achieved with React, including features like modals, carousels, and language translation.'
      },
      {
        header: 'Calculating cost per project',
        description: 'This calculation aims to meet business needs for cost per project, taking into account the time it took to be executed and whether it was happening in parallel with other projects. The function considers the variation of days in the month and distributes the cost equally among projects running during the same period.'
      },
      {
        header: 'Express.js API',
        description: 'Project to practice building an API using Express.js, Middleware, Handlebars, Next.js, and MVC (Model-View-Controller). Through routes, it allows adding friends via POST requests to /friends. Additionally, you can view the complete list of friends or get information about a specific friend based on the provided ID.'
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
    intro: (diffInYears) => `Oi, meu nome é Michelle e tenho mais de ${diffInYears} anos de experiência em desenvolvimento fullstack.
      Minha jornada até aqui tem sido incrível, e estou ansiosa para continuar aprendendo e contribuindo com novas soluções.
      Se você busca ajuda ou quer trocar ideias, se conecte comigo clicando nos ícones do Linkedin, Github ou Email!`,
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
      clickHere: 'Clique aqui e veja o modo Carrossel 🎠',
      back: 'Volte para a visualização anterior'
    },
    portfolio: {
      header: 'Meus projetos',
      subtitle: 'Aqui você encontrará alguns dos meus repositórios. Para ver todos, acesse minha',
      clickHere: 'página do GitHub'
    },
    portfolioItems: [
      {
        header: 'Portfólio',
        description: 'Você está vendo um portfólio em um site portfólio. Isso mesmo, você acaba de cair em um looping! Esse projeto foi pensado com atomic design, responsividade e componentes reaproveitáveis. Uma forma de mostrar o que é possível fazer com React: como modal, carrossel e tradução de idiomas.'
      },
      {
        header: 'Cálculo custo por projeto',
        description: 'Esse cálculo visa atender às necessidades de negócio de custo por projeto levando em consideração o tempo que levou pra ser executado e se estava acontecendo em paralelo com outros projetos. A função considera a variação de dias no mês e distribui o custo de maneira igualitária entre projetos em execução durante o mesmo período.'
      },
      {
        header: 'API Express.js',
        description: 'Projeto para exercitar construção de API usando Express.js, Middleware, Handlebars, Next.js e MVC (Model-View-Controller). Através de rotas, permite adicionar amigos por meio de solicitações POST em /friends. Além disso, é possível ver a lista completa de amigos ou obter informações sobre um amigo específico com base no ID fornecido.'
      }
    ],
    portfolioDialogButton: 'Saiba mais'
  },
};

export default texts;