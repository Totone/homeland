const resources = {
  en: {
    translation: {
      home: {
        header: "Moi c'est Anthony. Bienvenue!",
        subheader:
          "Je conçois et développe votre application de manière propre, efficace et agréable",
      },
      services: {
        header: "Services",
        subheader: "Je suis concepteur et développeur d'applications. Actuellement orienté web, je me spécialise sur stack full JavaScript",
        front: {
          title: "Frontend",
          description: "Création d'interfaces graphiques et de composants d'interface.",
        },
        back: {
          title: "Backend",
          description: "Mise en place de serveurs node et d'APIs utilisant NodeJS et expressJS.",
        },
        db: {
          title: "Bases de données",
          description: "Gestion des bases de données NoSQL avec mongoDB et mongoose.",
        },
        tools: {
          title: "Tools",
          description: "Création d'outils suivant l'objectif de faciliter et d'optimiser le développement.",
        },
      },
      itMonitoring: {
        header: "Veille",
        subheader:
          "J'effectue une veille technologique et technique constante visant à comprendre au mieux les différents concepts liés au développement (POO, APIs,..)",
        technology: {
          title: "Technologies",
          description: "Premier serveur servant une API réalisé sous deno il y a peu avec le framework oak. Par ailleurs, bien que spécialisé en JS, je reste à l'écoute des évolutions des autres technologies.",
        },
        noJs: {
          title: "No-JS",
          description: "Je reste à l'écoute des autres technologies du secteur, ainsi que du milieu du dev en général (C++, C#, PHP - Symfony, SQL,..)",
        },
        architecture: {
          title: "Architecture",
          description:
            "Architecture de projets cohérente: Approche composant pour les projets front, plus pratiques. Respect de la SOC et plus globalement des principes SOLID.",
        },
        practises: {
          title: "Best practises",
          description:
            "Recherche des meilleures méthodologies à adopter pour rendre les applications disponibles et accessibles à tous. Plus globalement à la recherche des meilleures techniques.",
        },
        i18n: {
          title: "i18n | l10n",
          description:
            "Internationnalisation (norme i18n) et localisation (norme l10n) visant à adapter les applications à d'autres cultures.",
        },
        curiosity: {
          title: "Curiosité technologique",
          description: "Je reste de manière curieuse mais moins soutenue à l'écoute de l'évolution des technologies en général (robotique, domotique, électronique,..) et des pratiques en cours.",
        },
      },
      contact: {
        header: "Me contacter",
        content:
          "Un avis ? Une question ou une suggestion ? Un partenariat ? Un projet ? N'hésitez pas à me partager votre idée via ce formulaire de contact.",
        push: {
          success:
            "Votre message a bien été envoyé. Une copie vous a été envoyée sur",
          danger:
            "Une erreur empêche l'envoi de ce mail, merci de vérifier vos entrées et réessayer",
        },
        form: {
          pseudo: {
            label: "Votre nom (ou pseudonyme)",
            placeholder: "Facultatif",
          },
          email: {
            label: "Votre adresse mail",
            placeholder: "Obligatoire",
            muted:
              "Votre adresse ne me sert qu'à vous répondre et ne sera transmise sous aucun prétexte",
          },
          phoneNb: {
            label: "Votre numéro de téléphone",
            placeholder: "Facultatif",
          },
          subject: {
            label: "Sujet",
            placeholder: "Facultatif",
          },
          content: {
            label: "Votre message",
            placeholder: "Dites-moi tout!",
          },
          button: "Envoyer",
        },
      },
    },
  },
};

export const servicesList = ["front", "back", "db", "tools"];

export const itMonitoringList = [
  "technology",
  "noJs",
  "architecture",
  "practises",
  "i18n",
  "curiosity",
];

export const contactInputs = ["pseudo", "email", "phoneNb", "subject", "content"];
export default resources;
