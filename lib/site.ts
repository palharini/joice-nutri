export const siteConfig = {
  name: "Joice Benedett",
  title: "Joice Benedett | Nutricionista",
  description:
    "Nutricionista com atuação em Nutrição Clínica, Esportiva e Saúde da Mulher. Conteúdos e acompanhamento nutricional com foco em saúde, equilíbrio e autonomia.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  locale: "pt_BR",

  author: {
    name: "Joice Benedett",
    profession: "Nutricionista",
    crn: "18605D",
  },

  contact: {
    email: "joicebenedett22@gmail.com",
    whatsapp: "5551998962398",
    instagram: "nutrijoicebenedett",
  },

  location: {
    city: "Taquara",
    state: "Rio Grande do Sul",
    country: "Brasil",
  },

  services: [
    "Nutrição Clínica",
    "Nutrição Esportiva",
    "Saúde da Mulher",
    "Acompanhamento Nutricional Online",
  ],
} as const;