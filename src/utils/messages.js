const messages = {
  en: {
    navigation: {
      home: 'Home',
      technologies: 'Technologies',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    intro: (diffInYears) => `Hi, my name is Michelle and I have over ${diffInYears} years of experience in fullstack development.
      My journey so far has been incredible, and I'm excited to continue growing, learning, and contributing to new solutions.
      If you're seeking help or want to exchange ideas, I'm available to collaborate!`,
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
    technologies: {
      header: 'Some of the technologies I use',
      changeView: 'There is no reason to put that same list on a carousel. But I wanted to do it anyway!',
      clickHere: 'Click here to see 🎠 Carrossel mode 🎠',
      back: 'Back to previous view'
    }
  },
  ptbr: {
    navigation: {
      home: 'Início',
      technologies: 'Tecnologias',
      portfolio: 'Portfólio',
      contact: 'Contato',
    },
    intro: (diffInYears) => `Oi, meu nome é Michelle e tenho mais de ${diffInYears} anos de experiência em desenvolvimento fullstack.
      Minha jornada até aqui tem sido incrível, e estou ansiosa para continuar crescendo, aprendendo e contribuindo com novas soluções.
      Se você busca ajuda ou quer trocar ideias, estou à disposição para colaborar!`,
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
    technologies: {
      header: 'Algumas das technologias que uso',
      changeView: 'Não existe nenhum motivo para colocar essa mesma lista em um Carrossel. Mas eu quis fazer mesmo assim!',
      clickHere: 'Clique aqui e veja o 🎠 modo Carrossel 🎠',
      back: 'Volte para a visualização anterior'
    }
  },
};

export default messages;
