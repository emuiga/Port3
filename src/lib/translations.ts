export const translations = {
  en: {
    nav: {
      services: "SERVICES",
      technologies: "TECHNOLOGIES",
      portfolio: "PORTFOLIO",
      contact: "CONTACT"
    },
    hero: {
      greeting: "Hey, I'm Steve Muiga",
      titles: [
        "Fullstack Developer",
        "Mobile Developer",
        "IoT Curious",
        "Technical Writer"
      ],
      cta: "VIEW MY WORK"
    },
    services: {
      title: "MY SERVICES",
      webDev: {
        title: "Website Development",
        description: "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device."
      },
      webDesign: {
        title: "Web Design",
        description: "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals."
      },
      wordpress: {
        title: "WordPress Development",
        description: "I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios."
      }
    }
  },
  sw: {
    nav: {
      services: "HUDUMA",
      technologies: "TEKNOLOJIA",
      portfolio: "KAZI ZANGU",
      contact: "WASILIANA"
    },
    hero: {
      greeting: "Habari, Mimi ni Steve Muiga",
      titles: [
        "Mtengenezaji wa Tovuti",
        "Mtengenezaji wa Simu",
        "Mtafiti wa IoT",
        "Mwandishi wa Kiufundi"
      ],
      cta: "TAZAMA KAZI ZANGU"
    },
    services: {
      title: "HUDUMA ZANGU",
      webDev: {
        title: "Utengenezaji wa Tovuti",
        description: "Ninatengeneza tovuti kulingana na muundo wako. Iwe ni ukurasa wa kutua au tovuti ya kadi ya biashara, nitaifanya ionekane nzuri na kufanya kazi vizuri kwenye kifaa chochote."
      },
      webDesign: {
        title: "Ubunifu wa Tovuti",
        description: "Ninaweza kubuni tovuti yako kutoka mwanzo. Ninatengeneza miundo ya kisasa, rahisi, na rafiki kwa mtumiaji inayoendana na chapa na malengo yako."
      },
      wordpress: {
        title: "Utengenezaji wa WordPress",
        description: "Ninatengeneza tovuti kwenye WordPress, kuzifanya ziwe rahisi kusasisha na kusimamia. Ni chaguo zuri kwa blogu, biashara ndogo, au portfolio."
      }
    }
  }
}

export type Language = keyof typeof translations 