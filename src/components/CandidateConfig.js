// src/components/CandidateConfig.js
export const candidatesConfig = {
  joao: {
    candidate: {
      name: 'João Silva',
      political: 'Partido X',
      slogan: 'Juntos por um futuro melhor',
      summary: 'João Silva é um candidato comprometido com as melhorias para a cidade...',
      photo: 'assets/candidate-photo.jpg',
      primary: '#06014a',
      secondary: '#353169',
      contact: {
        email: 'joao.silva@example.com',
        whatsapp: '5511998887777',
        instagram: 'https://www.instagram.com/joaosilva',
        twitter: 'https://twitter.com/joaosilva',
        facebook: 'https://www.facebook.com/joaosilva',
      },
    },
  },

  maria: {
    candidate: {
      name: "Maria Oliveira",
      slogan: "Avançar com Maria",
      primary: "#4CAF50",
      secondary: "#388E3C",
      accent: "#2C6B2F",
      photo: "./assets/candidate-photo.jpg",
      summary: "Maria Oliveira é uma candidata com uma visão inovadora para a cidade, focando em sustentabilidade e melhorias na qualidade de vida. Ela traz uma abordagem fresca e eficaz para resolver os desafios urbanos."
    }
  },
  default: {
    candidate: {
      name: "Candidato Default",
      slogan: "Slogan Default",
      primary: "#000000",
      secondary: "#CCCCCC",
      accent: "#333333",
      photo: "./assets/candidate-photo.jpg",
      summary: "Resumo default do candidato."
    }
  }
};
