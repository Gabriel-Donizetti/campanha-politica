export const candidatesConfig = {
  joao: {
    candidate: {
      name: "João Da Silva",
      photo: "/campanha-politica/assets/candidate-photo.jpg",
      logoLigth: "/campanha-politica/assets/logo_ligth.jpg",
      logoDark: "/campanha-politica/assets/logo_dark.jpg",
      political: "Partido Psol",
      slogan: "Por um futuro melhor",
      summary: "João é um candidato com vasta experiência em gestão pública, conhecido por sua integridade e dedicação. Ao longo de sua carreira, ele implementou diversas políticas que beneficiaram milhares de pessoas, sempre focado em transparência e eficiência. Como vereador, pretende continuar seu trabalho para transformar nossa cidade em um lugar melhor para todos.",
      primary: "#5d3478",
      secondary: "#470075",
      text: '#FDD505', // Cor do texto
      contact: {
        email: "joao@example.com",
        whatsapp: "55999999999",
        facebook: "https://facebook.com/joao",
        instagram: "https://instagram.com/joao",
        twitter: "https://twitter.com/joao"
      },
      proposals: [
        {
          title: "Educação de qualidade",
          description: "João acredita que a educação é a base para um futuro próspero. Ele propõe a construção de novas escolas, a formação contínua de professores e a implementação de tecnologias avançadas nas salas de aula. Seu objetivo é garantir que todas as crianças tenham acesso a uma educação de alta qualidade, independentemente de sua condição socioeconômica."
        },
        {
          title: "Saúde acessível",
          description: "Para João, a saúde é um direito fundamental. Sua proposta inclui a ampliação do atendimento nos postos de saúde, a contratação de mais profissionais qualificados e a modernização dos equipamentos médicos. Além disso, ele quer implementar programas de prevenção e promoção da saúde para reduzir a incidência de doenças e melhorar a qualidade de vida da população."
        },
        {
          title: "Segurança pública",
          description: "A segurança é uma das maiores preocupações de João. Ele propõe o aumento do efetivo policial, a instalação de câmeras de vigilância em pontos estratégicos e a criação de programas comunitários de segurança. Com essas medidas, ele acredita que será possível reduzir a criminalidade e trazer mais tranquilidade para os moradores."
        },
        {
          title: "Meio ambiente sustentável",
          description: "João é um defensor fervoroso do meio ambiente. Sua proposta inclui a criação de áreas verdes, a implementação de programas de reciclagem e a promoção de energias renováveis. Ele acredita que, com políticas sustentáveis, é possível garantir um futuro saudável e equilibrado para as próximas gerações."
        },
        {
          title: "Transporte público eficiente",
          description: "Para melhorar a mobilidade urbana, João propõe a modernização da frota de ônibus, a criação de ciclovias e a ampliação do metrô. Ele também quer implementar um sistema de bilhetagem integrada para facilitar o deslocamento dos cidadãos. Com um transporte público eficiente, ele acredita que será possível reduzir o trânsito e a poluição na cidade."
        },
        {
          title: "Habitação digna",
          description: "João defende o direito à moradia digna para todos. Sua proposta inclui a construção de novas unidades habitacionais, a regularização fundiária de áreas irregulares e a implementação de programas de financiamento para a compra da casa própria. Ele acredita que, com essas medidas, será possível reduzir o déficit habitacional e melhorar a qualidade de vida das famílias."
        }
      ]
    }
  },
  lopes: {
    candidate: {
      name: "Investigador Lopes",
      photo: "/campanha-politica/assets/investigador_lopes.jpg",
      logoLigth: "/campanha-politica/assets/logo_ligth.jpg",
      logoDark: "/campanha-politica/assets/logo_dark.jpg",
      political: "Partido Psol",
      slogan: "Para que o mal triunfe, basta que os bons não façam nada. Edmund Burke",
      summary: "Inisvaldo Lopes Flausino, é natural de Ivaté Pr, se mudou para Araucaria em 1996, é formado em Gestão Ambiental, pai de tres filhos, divorciado, servidor publico concursado da Policia Civil do Paraná, trabalha na investigação, por isso o chamam por \"investigador Lopes\". Se candidatou porque tem consciencia da necessidade de participação no poder politico, haja vista tudo passar por ele.Se candidatou porque tem consciencia da necessidade de participação no poder politico, como forma de buscar o bem estar de tod@s, haja vista tudo depender de de vontade politica.",
      primary: "#5d3478",
      secondary: "#470075",
      text: '#FDD505', // Cor do texto
      contact: {
        email: "lopes@example.com",
        whatsapp: "55999999999",
        facebook: "https://facebook.com/investigadorlopes",
        instagram: "https://instagram.com/investigadorlopes",
        twitter: "https://twitter.com/investigadorlopes"
      },
      proposals: [
        {
          title: "1",
          description: "Fiscalizar as ações do executivo e do legislativo com rigor."
        },
        {
          title: "2",
          description: "Legislar com ética, transparência e com diálogo com os envolvidos."
        },
        {
          title: "3",
          description: "Lutar sempre por serviços públicos, gratuitos e de qualidade."
        },
        {
          title: "4",
          description: "Propor e aprovar projetos de lei de interesse coletivo."
        },
      ]
    }
  },
  default: {
    candidate: {
      name: "Candidato Padrão",
      photo: "path/to/photo.jpg",
      political: "Partido Padrão",
      slogan: "Por um futuro melhor",
      summary: "Este é o candidato padrão...",
      primary: "#123456",
      secondary: "#654321",
      contact: {
        email: "default@example.com",
        whatsapp: "55999999999",
        facebook: "https://facebook.com/default",
        instagram: "https://instagram.com/default",
        twitter: "https://twitter.com/default"
      },
      proposals: [
        {
          title: "Educação de qualidade",
          description: "Proposta para melhorar a educação..."
        },
        {
          title: "Saúde acessível",
          description: "Proposta para tornar a saúde mais acessível..."
        },
        {
          title: "Segurança pública",
          description: "Proposta para melhorar a segurança nas ruas..."
        }
      ]
    }
  }
};
