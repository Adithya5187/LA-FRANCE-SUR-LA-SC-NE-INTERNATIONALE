import { ASSETS } from './assets';

export interface Scene {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  content: string[];
  keyPoints?: string[];
  imageKey?: keyof typeof ASSETS;
  imagePosition?: 'left' | 'right' | 'full' | 'center';
  statBox?: {
    value: string;
    label: string;
    detail: string;
  };
}

export interface Chapter {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  presenter: string;
  duration: string;
  navIcon: string;
  themeColor: string;
  typewriterQuote: {
    quote: string;
    author?: string;
    context: string;
  };
  speakerScript: {
    title: string;
    paragraphs: string[];
  };
  scenes: Scene[];
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'chapitre-01',
    number: '01',
    shortTitle: 'Introduction',
    title: 'LA FRANCE SUR LA SCÈNE INTERNATIONALE',
    subtitle: 'Une voix influente dans les affaires mondiales.',
    presenter: 'Présentateur 01',
    duration: '1,5 minute',
    navIcon: 'Globe',
    themeColor: '#244B85',
    typewriterQuote: {
      quote: "« La France a une vocation universelle : défendre le droit international, préserver la paix et porter une voix indépendante sur la scène mondiale. »",
      author: "Principes diplomatiques de la République",
      context: "Doctrine de la politique étrangère française"
    },
    speakerScript: {
      title: "Introduction – La France sur la scène internationale",
      paragraphs: [
        "Bonjour à tous. Aujourd’hui, notre présentation porte sur la France et son rôle sur la scène internationale.",
        "La France est un pays d'Europe occidentale, dont la capitale est Paris. C'est une république semi-présidentielle et l'une des nations les plus influentes au monde. La France joue un rôle majeur dans les affaires internationales grâce à son économie, sa puissance militaire, sa culture et ses relations diplomatiques.",
        "La France est active au sein de plusieurs grandes organisations internationales, notamment l'Union européenne, l'Organisation des Nations Unies, l'OTAN et le G7. À travers ces institutions, elle participe activement aux délibérations sur le commerce, la sécurité collective, les droits de l'homme, l'action climatique et la paix mondiale.",
        "La France dispose également de territoires d'outre-mer répartis sur tous les océans de la planète, ce qui lui confère une présence géostratégique globale bien au-delà des frontières du continent européen.",
        "Sa politique étrangère met l'accent sur l'indépendance nationale, la coopération internationale, le dialogue diplomatique et le respect scrupuleux du droit international.",
        "Dans les sections suivantes, nous explorerons en détail le rôle de la France au sein de l'Union européenne, des Nations Unies, de l'OTAN et face aux grands défis contemporains de la paix mondiale."
      ]
    },
    scenes: [
      {
        id: 'scene-1-1',
        badge: 'IDENTITÉ & STATUT MONDIAL',
        title: 'Une puissance d’équilibre au cœur des relations internationales',
        subtitle: 'Une république semi-présidentielle et un acteur diplomatique de premier rang',
        content: [
          "Située au carrefour de l'Europe occidentale, la République française allie une histoire séculaire à un rayonnement géopolitique moderne.",
          "Dotée du troisième plus grand réseau diplomatique au monde, la France maintient des ambassades et consulats sur tous les continents, lui permettant d'intervenir en médiatrice impartiale et en promotrice constante du multilatéralisme."
        ],
        keyPoints: [
          "Capitale : Paris, carrefour politique et intellectuel mondial",
          "Régime : République semi-présidentielle démocratique",
          "Réseau diplomatique : 3e mondial avec plus de 160 ambassades",
          "Langue : Le français, langue officielle de travail des grandes instances internationales"
        ],
        imageKey: 'parisSunsetEiffel',
        imagePosition: 'right',
        statBox: {
          value: '3e',
          label: 'Réseau diplomatique mondial',
          detail: 'Représentations diplomatiques permanentes à travers le monde'
        }
      },
      {
        id: 'scene-1-2',
        badge: 'PRÉSENCE PLANÉTAIRE & OUTRE-MER',
        title: 'Un archipel souverain sur tous les océans de la Terre',
        subtitle: 'Une zone économique exclusive de plus de 10 millions de km²',
        content: [
          "Grâce à ses départements et collectivités d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Polynésie française, Nouvelle-Calédonie, Saint-Pierre-et-Miquelon, Terres australes), le soleil ne se couche jamais sur le territoire national.",
          "Cette géographie unique confère à la France le deuxième domaine maritime planétaire, la plaçant au premier plan de la préservation de la biodiversité marine et de la sécurité océanique."
        ],
        keyPoints: [
          "2e plus vaste Zone Économique Exclusive (ZEE) au monde",
          "Présence permanente dans l'Atlantique, l'océan Indien et le Pacifique",
          "Poste d'observation privilégié pour la science, le climat et la biodiversité",
          "Capacités de déploiement naval et aérospatial autonome"
        ],
        imageKey: 'franceOutreMer',
        imagePosition: 'left',
        statBox: {
          value: '10,2 M km²',
          label: 'Domaine maritime souverain (ZEE)',
          detail: 'Deuxième domaine maritime mondial derrière les États-Unis'
        }
      },
      {
        id: 'scene-1-3',
        badge: 'PILIERS D’INFLUENCE',
        title: 'Économie, dissuasion, culture et diplomatie républicaine',
        subtitle: 'Une synthèse unique de puissance douce (soft power) et de souveraineté stratégique',
        content: [
          "La puissance internationale de la France s'appuie sur quatre piliers indissociables : une économie de premier plan intégrée au marché unique européen, une dissuasion nucléaire strictement souveraine, un héritage culturel universel et une diplomatie d'ouverture.",
          "Fidèle à ses principes républicains, la France défend l'universalité des droits humains, le règlement pacifique des différends et une gouvernance mondiale inclusive."
        ],
        keyPoints: [
          "Économie : 7e puissance économique mondiale (PIB > 3 000 Md$)",
          "Défense : Forces armées professionnelles et dissuasion nucléaire autonome",
          "Culture : Première destination touristique mondiale, berceau des Lumières",
          "Francophonie : Plus de 320 millions de locuteurs sur cinq continents"
        ],
        imageKey: 'franceGlobe3D',
        imagePosition: 'right'
      }
    ]
  },
  {
    id: 'chapitre-02',
    number: '02',
    shortTitle: 'Union Européenne',
    title: 'LA FRANCE ET L\'UNION EUROPÉENNE',
    subtitle: 'L’unité, la coopération et l’intégration européenne.',
    presenter: 'Présentateur 02',
    duration: '1,5 minute',
    navIcon: 'Landmark',
    themeColor: '#10233F',
    typewriterQuote: {
      quote: "« L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle se fera par des réalisations concrètes créant d'abord une solidarité de fait. »",
      author: "Robert Schuman",
      context: "Déclaration du Salon de l'Horloge, Quai d'Orsay, 9 mai 1950"
    },
    speakerScript: {
      title: "France et Union Européenne – Intégration et priorités partagées",
      paragraphs: [
        "L'Union européenne, ou UE, est une union politique et économique regroupant 27 pays européens. Elle a été construite après la Seconde Guerre mondiale pour encourager la coopération et empêcher de nouveaux conflits armés sur le continent.",
        "La France est l'un des six membres fondateurs du projet d'intégration européenne. En 1950, le ministre français des Affaires étrangères, Robert Schuman, a proposé de placer en commun la production franco-allemande de charbon et d'acier. Cette proposition a conduit à la création de la Communauté européenne du charbon et de l'acier (CECA), ancêtre direct de l'Union européenne.",
        "Aujourd'hui, la France joue un rôle moteur dans la prise de décision européenne. Elle participe activement au Conseil européen, au Conseil de l'Union européenne et au Parlement européen à Strasbourg.",
        "La France soutient la coopération dans des domaines clés tels que le développement économique, le commerce équitable, la transition écologique, l'innovation technologique et la sécurité commune. Elle défend également avec force le concept d'autonomie stratégique européenne pour permettre à l'Europe de protéger ses intérêts souverains face aux crises internationales.",
        "L'appartenance de la France à l'UE garantit un accès direct au marché unique et renforce considérablement les liens de solidarité avec les pays voisins.",
        "Ainsi, la France n'est pas seulement un membre de l'Union européenne : elle est l'une des nations qui ont bâti et continuent de façonner l'unité européenne."
      ]
    },
    scenes: [
      {
        id: 'scene-2-1',
        badge: 'GENÈSE HISTORIQUE (1950)',
        title: 'L’acte de naissance de la paix européenne : La Déclaration Schuman',
        subtitle: 'La réconciliation franco-allemande scellée par la mise en commun du charbon et de l’acier',
        content: [
          "Au lendemain de deux guerres dévastatrices, la vision audacieuse de Robert Schuman et Jean Monnet a métamorphosé des rivalités séculaires en coopération pacifique et constructive.",
          "Le 9 mai 1950, au Quai d'Orsay, Schuman propose de placer la production franco-allemande de charbon et d'acier sous une Haute Autorité commune, ouverte aux autres pays européens. La CECA naissait en 1951, suivie des Traités de Rome en 1957 fondant la Communauté économique européenne."
        ],
        keyPoints: [
          "9 mai 1950 : Déclaration Schuman, devenue Journée de l'Europe",
          "Les 6 membres fondateurs : France, Allemagne de l'Ouest, Italie, Belgique, Pays-Bas, Luxembourg",
          "1957 : Traités de Rome instaurant le Marché commun et Euratom",
          "Objectif suprême : Rendre toute guerre entre nations européennes « non seulement impensable, mais matériellement impossible »"
        ],
        imageKey: 'robertSchuman',
        imagePosition: 'left',
        statBox: {
          value: '6 → 27',
          label: 'Élargissement démocratique',
          detail: 'Des 6 nations fondatrices en 1951 aux 27 démocraties unies aujourd’hui'
        }
      },
      {
        id: 'scene-2-2',
        badge: 'INSTITUTIONS & DÉCISIONS',
        title: 'Le moteur franco-allemand et la gouvernance communautaire',
        subtitle: 'Une influence déterminante au Conseil européen et au Parlement de Strasbourg',
        content: [
          "Au sein du triangle institutionnel de Bruxelles, Strasbourg et Luxembourg, la voix française est centrale dans l'orientation des politiques publiques continentales.",
          "Strasbourg, capitale parlementaire européenne et symbole vivant de la réconciliation, accueille les sessions plénières du Parlement européen, affirmant l'ancrage démocratique de la France dans le projet européen."
        ],
        keyPoints: [
          "Parlement européen : Siège officiel à Strasbourg, cœur démocratique de l'Union",
          "Conseil européen : Définition des grandes orientations stratégiques par les chefs d'État",
          "Marché unique & zone Euro : Solidarité monétaire et économique pour 450 millions de citoyens",
          "Pacte vert européen : Leadership conjoint sur la décarbonation et l'énergie nucléaire décarbonée"
        ],
        imageKey: 'jeanMonnet',
        imagePosition: 'right'
      },
      {
        id: 'scene-2-3',
        badge: 'HORIZON GÉOPOLITIQUE',
        title: 'Vers une véritable autonomie stratégique européenne',
        subtitle: 'Défense, technologies d’avenir et souveraineté industrielle',
        content: [
          "Face à la résurgence des tensions géopolitiques mondiales, la France promeut inlassablement le concept d'autonomie stratégique : doter l'Europe de ses propres capacités de défense, d'approvisionnement énergétique et de filières technologiques de pointe.",
          "Pour Paris, une Europe plus forte et plus souveraine n'est pas une alternative aux alliances internationales, mais la condition indispensable d'un multilatéralisme efficace."
        ],
        keyPoints: [
          "Boussole stratégique de l'UE et coopération militaire renforcée (CSP / PESCO)",
          "Investissements conjoints dans le spatial (Ariane), l'intelligence artificielle et l'aéronautique",
          "Protection des infrastructures critiques et résilience des chaînes de valeur",
          "Défense du modèle social et environnemental européen sur la scène commerciale internationale"
        ],
        imageKey: 'euFlagWaving',
        imagePosition: 'full'
      }
    ]
  },
  {
    id: 'chapitre-03',
    number: '03',
    shortTitle: 'Nations Unies',
    title: 'LA FRANCE ET L\'ORGANISATION DES NATIONS UNIES',
    subtitle: 'Diplomatie, paix et décisions internationales.',
    presenter: 'Présentateur 03',
    duration: '1,5 minute',
    navIcon: 'Globe2',
    themeColor: '#183159',
    typewriterQuote: {
      quote: "« En tant que membre permanent du Conseil de sécurité, la France assume la responsabilité de protéger la paix, promouvoir les droits humains et défendre le multilatéralisme. »",
      author: "Mission Permanente de la France auprès de l'ONU",
      context: "Engagement pour la sécurité internationale et l'État de droit"
    },
    speakerScript: {
      title: "France et Nations Unies – Diplomatie mondiale, paix et délibérations",
      paragraphs: [
        "L'Organisation des Nations Unies, ou ONU, a été créée en 1945 au lendemain de la Seconde Guerre mondiale. Ses missions premières sont de maintenir la paix et la sécurité internationales, de promouvoir les droits de l'homme et de favoriser la coopération entre tous les pays.",
        "La France est un membre fondateur des Nations Unies et l'un des cinq membres permanents du Conseil de sécurité de l'ONU, aux côtés de la Chine, des États-Unis, de la Fédération de Russie et du Royaume-Uni.",
        "En tant que membre permanent, la France détient le droit de veto. Cela signifie qu'elle peut empêcher l'adoption d'une résolution substantielle du Conseil de sécurité. Ce statut confère à notre pays une responsabilité majeure et une voix décisive dans les arbitrages touchant à la paix et à la sécurité internationales.",
        "La France apporte également une contribution constante aux Nations Unies à travers son action diplomatique, son appui aux opérations de maintien de la paix (Casques bleus), ses secours humanitaires d'urgence et la défense inconditionnelle du droit international.",
        "Notre diplomatie se distingue aussi par son leadership climatique mondial : c'est sous la présidence française que l'Accord historique de Paris sur le climat a été adopté à l'unanimité en 2015 lors de la COP21.",
        "Par son siège permanent et sa présence active dans toutes les agences onusiennes, la France demeure une force d'équilibre et de progrès universel."
      ]
    },
    scenes: [
      {
        id: 'scene-3-1',
        badge: 'MEMBRE FONDATEUR (1945)',
        title: 'Le Conseil de sécurité et les cinq membres permanents (P5)',
        subtitle: 'Une prérogative historique accordée aux artisans de la victoire de 1945',
        content: [
          "Fondée à San Francisco en 1945, l'ONU confie la responsabilité principale du maintien de la paix mondiale à un organe exécutif : le Conseil de sécurité.",
          "La France y dispose d'un siège permanent et du droit de veto aux côtés des États-Unis, du Royaume-Uni, de la Russie et de la Chine. Ce statut lui confère une capacité d'influence sans équivalent sur les résolutions contraignantes, les sanctions et le mandat des Casques bleus."
        ],
        keyPoints: [
          "P5 : France, États-Unis, Royaume-Uni, Russie, Chine",
          "Droit de veto : faculté d'empêcher l'adoption de toute résolution substantielle",
          "Doctrine française responsable : la France n'a plus utilisé son veto de manière unilatérale depuis 1989",
          "Initiative pour encadrer le veto en cas d'atrocités de masse ou de crimes contre l'humanité"
        ],
        imageKey: 'unSecurityCouncilChamber',
        imagePosition: 'right',
        statBox: {
          value: 'P5',
          label: 'Membre Permanent',
          detail: 'L’une des cinq puissances détenant le droit de veto au Conseil de sécurité'
        }
      },
      {
        id: 'scene-3-2',
        badge: 'TRIBUNE UNIVERSELLE',
        title: 'Porter la voix du droit international et des droits fondamentaux',
        subtitle: 'Du Palais de Chaillot (1948) à la tribune de l’Assemblée générale de Manhattan',
        content: [
          "L'attachement de la France à l'ONU est indissociable de sa tradition humaniste. C'est à Paris, au Palais de Chaillot, qu'a été adoptée en 1948 la Déclaration universelle des droits de l'homme rédigée sous l'impulsion du juriste français René Cassin, prix Nobel de la paix.",
          "Chaque année, lors du débat général de l'Assemblée générale à New York, le président de la République rappelle l'attachement indéfectible de la France à l'ordre international fondé sur des règles et au rejet de la loi du plus fort."
        ],
        keyPoints: [
          "1948 : Adoption à Paris de la Déclaration Universelle des Droits de l'Homme",
          "Présence humanitaire : Financement majeur du HCR, du PAM et de l'UNICEF",
          "Maintien de la paix : Engagement militaire français au Liban (FINUL) et en Afrique",
          "Médiation multilatérale : Défense des petits États et protection de la souveraineté collective"
        ],
        imageKey: 'macronUnGeneralAssembly',
        imagePosition: 'left'
      },
      {
        id: 'scene-3-3',
        badge: 'ACCORD DE PARIS (2015)',
        title: 'Le leadership diplomatique pour le climat mondial',
        subtitle: 'Le tournant décisif de la COP21 : premier accord universel et juridiquement contraignant',
        content: [
          "En décembre 2015, la diplomatie française a réalisé l'un des plus grands succès multilatéraux du XXIe siècle en unissant 196 délégations autour de l'Accord de Paris sur le climat.",
          "Cet accord historique fixe l'objectif impératif de contenir le réchauffement planétaire bien en dessous de 2 °C par rapport aux niveaux préindustriels, démontrant la capacité de la France à construire des consensus universels sur les biens communs de l'humanité."
        ],
        keyPoints: [
          "COP21 (2015) : Accord signé par 196 nations sous l'égide de la France",
          "Objectif universel : Limiter la hausse des températures à 1,5 °C",
          "Pacte pour l'environnement et financements climatiques en faveur des pays du Sud",
          "Sommet pour un nouveau pacte financier mondial tenu à Paris en 2023"
        ],
        imageKey: 'franceSecurityCouncilDelegate',
        imagePosition: 'right'
      }
    ]
  },
  {
    id: 'chapitre-04',
    number: '04',
    shortTitle: 'OTAN',
    title: 'LA FRANCE ET L\'OTAN',
    subtitle: 'Défense collective et indépendance stratégique.',
    presenter: 'Présentateur 04',
    duration: '1,5 minute',
    navIcon: 'Shield',
    themeColor: '#0B1B33',
    typewriterQuote: {
      quote: "« L'alliance est nécessaire, mais la France doit rester maîtresse de son destin et de sa force de dissuasion nucléaire. »",
      author: "Général de Gaulle",
      context: "Doctrine d'indépendance nationale et de souveraineté militaire"
    },
    speakerScript: {
      title: "France et OTAN – Défense collective et indépendance stratégique",
      paragraphs: [
        "L'OTAN désigne l'Organisation du traité de l'Atlantique nord. Elle a été créée en 1949 en tant qu'alliance militaire de défense collective. Sa pierre angulaire est l'Article 5, qui stipule qu'une attaque armée contre l'un des membres est considérée comme une attaque dirigée contre l'ensemble des pays alliés.",
        "La France figure parmi les douze États fondateurs de l'OTAN. Toutefois, en 1966, sous la présidence du Général Charles de Gaulle, la France a pris la décision souveraine de se retirer de la structure militaire intégrée de l'OTAN. Cette décision visait à garantir la totale indépendance de nos choix de défense et de notre arsenal nucléaire, sans jamais rompre le lien de l'Alliance atlantique elle-même.",
        "En 2009, la France a réintégré le commandement militaire intégré de l'OTAN, tout en conservant une souveraineté absolue sur sa force de frappe nucléaire indépendante.",
        "Aujourd'hui, la France apporte une contribution militaire essentielle à l'OTAN : participation à la police du ciel, déploiements terrestres en Roumanie et dans les pays baltes, exercices interarmées de haute intensité et présence navale stratégique.",
        "La position française conjugue une solidarité sans faille envers nos alliés et la volonté indéfectible de préserver la maîtrise nationale de nos décisions de sécurité.",
        "Ainsi, la France s'impose comme un allié fiable et robuste tout en préservant son autonomie stratégique fondamentale."
      ]
    },
    scenes: [
      {
        id: 'scene-4-1',
        badge: 'ALLIANCE FONDATRICE & ARTICLE 5',
        title: 'Le principe cardinal de solidarité transatlantique',
        subtitle: '« Un pour tous, tous pour un » : la garantie de sécurité collective depuis 1949',
        content: [
          "Signé à Washington le 4 avril 1949, le Traité de l'Atlantique Nord scelle un pacte de défense mutuelle face à toute agression extérieure.",
          "L'Article 5 dispose qu'une agression contre un allié en Europe ou en Amérique du Nord déclenche l'assistance immédiate de tous les autres, y compris par l'emploi des forces armées si nécessaire."
        ],
        keyPoints: [
          "Fondation : 1949 à Washington par 12 nations fondatrices dont la France",
          "Article 5 : Clause d'assistance mutuelle et de défense collective",
          "Interopérabilité : Standards tactiques, logistiques et technologiques partagés",
          "Siège politique : Bruxelles, réunissant régulièrement le Conseil de l'Atlantique Nord"
        ],
        imageKey: 'natoHqBrussels',
        imagePosition: 'right',
        statBox: {
          value: 'Art. 5',
          label: 'Défense collective',
          detail: 'Clause centrale garantissant la sécurité réciproque de tous les alliés'
        }
      },
      {
        id: 'scene-4-2',
        badge: 'LA TRAJECTOIRE GAULLIENNE (1966)',
        title: 'La singularité française : le refus de la subordination militaire',
        subtitle: 'La sortie du commandement intégré sous Charles de Gaulle et la naissance de la force de frappe',
        content: [
          "En mars 1966, le Général de Gaulle adresse une lettre au président américain Lyndon B. Johnson notifiant le retrait de la France de la structure de commandement militaire intégré de l'OTAN.",
          "Refusant qu'une guerre impliquant la France puisse être déclenchée sans l'aval exclusif du président de la République, De Gaulle sanctuarise la souveraineté française tout en restant signataire du Traité de l'Atlantique Nord et allié fidèle."
        ],
        keyPoints: [
          "1966 : Fermeture des bases militaires américaines sur le sol français",
          "Dissuasion nucléaire indépendante : Mise en service de la triade souveraine (Tir de Mirage IV, SNLE)",
          "Préservation de la souveraineté républicaine : Aucune arme nucléaire française sous commandement allié",
          "Doctrine de dissuasion stricte : « Du faible au fort », protégeant les intérêts vitaux de la nation"
        ],
        imageKey: 'charlesDeGaulle1966',
        imagePosition: 'left'
      },
      {
        id: 'scene-4-3',
        badge: 'RÉINTÉGRATION (2009) & DÉFENSE ACTUELLE',
        title: 'Un allié de premier plan, moderne et immédiatement déployable',
        subtitle: 'Le retour dans les états-majors alliés sous Nicolas Sarkozy et la projection sur le flanc Est',
        content: [
          "En 2009, estimant que la France devait peser pleinement sur les décisions de planification de l'Alliance, le président Nicolas Sarkozy décide du retour dans le commandement intégré.",
          "Depuis le déclenchement de la guerre en Ukraine, la France assume un rôle de nation-cadre sur le flanc oriental de l'OTAN, notamment en Roumanie (mission Aigle) et en Estonie (mission Lynx), aux côtés de patrouilles aériennes assurées par ses chasseurs Rafale."
        ],
        keyPoints: [
          "2009 : Réintégration complète du commandement allié avec préservation du statut nucléaire",
          "Mission Aigle en Roumanie : Bataillon multinational sous commandement français",
          "Police du ciel : Déploiements permanents en Pologne et dans les pays baltes",
          "Le Rafale : Appareil de supériorité aérienne et vecteur nucléaire aéroporté souverain"
        ],
        imageKey: 'dassaultRafale',
        imagePosition: 'right'
      }
    ]
  },
  {
    id: 'chapitre-05',
    number: '05',
    shortTitle: 'Paix Mondiale',
    title: 'LA FRANCE FACE AUX DÉFIS DE LA PAIX MONDIALE',
    subtitle: 'Diplomatie et coopération dans un monde en mutation.',
    presenter: 'Présentateur 05',
    duration: '1,5 minute',
    navIcon: 'Handshake',
    themeColor: '#D62839',
    typewriterQuote: {
      quote: "« Face aux crises internationales en Ukraine, au Proche-Orient et dans l'Indo-Pacifique, la France privilégie la diplomatie du dialogue exigeant et la défense des souverainetés. »",
      author: "Diplomatie d'équilibre de la France",
      context: "Engagement pour la résolution pacifique des conflits"
    },
    speakerScript: {
      title: "La France et les défis contemporains de la paix – Coopération dans un monde en mutation",
      paragraphs: [
        "La France recourt activement à la diplomatie, aux partenariats bilatéraux et à la coopération multilatérale pour répondre aux bouleversements géopolitiques contemporains.",
        "Le premier défi majeur réside dans la guerre menée par la Russie contre l'Ukraine, qui a basculé dans une invasion à grande échelle en février 2022. La France soutient sans relâche la souveraineté et l'intégrité territoriale de l'Ukraine, en étroite coordination avec ses partenaires européens et internationaux sur les plans diplomatique, militaire et humanitaire.",
        "Un autre enjeu critique concerne le conflit israélo-palestinien. La France défend avec constance une solution à deux États, dans laquelle Israël et un État palestinien souverain peuvent coexister côte à côte dans la paix, la dignité et la sécurité mutuelle. Dans cette perspective, la France a officiellement reconnu l'État de Palestine en septembre 2025.",
        "Par ailleurs, la France accorde une importance stratégique primordiale à la région Indo-Pacifique en raison de ses territoires ultra-marins et de ses 1,6 million de concitoyens qui y vivent. Elle y noue des coopérations majeures avec des puissances démocratiques partenaires, au premier rang desquelles l'Inde. Le partenariat stratégique franco-indien, établi dès 1998, couvre la défense souveraine, la surveillance maritime et l'innovation technologique.",
        "Enfin, en 2026, la France assume la présidence tournante du G7 et accueille les chefs d'État au prestigieux Sommet d'Évian du 15 au 17 juin, offrant un forum de haut niveau pour concerter les réponses aux défis économiques, sécuritaires et environnementaux mondiaux.",
        "Ces engagements illustrent la fidélité de la France à une diplomatie d'équilibre, de justice internationale et de responsabilité partagée."
      ]
    },
    scenes: [
      {
        id: 'scene-5-1',
        badge: 'GUERRE EN UKRAINE (DEPUIS 2022)',
        title: 'Soutien inconditionnel à la souveraineté et au droit des peuples',
        subtitle: 'Une aide globale : livraison d’armements modernes, soutien financier et formations militaires',
        content: [
          "Depuis l'invasion brutale de l'Ukraine par la Russie en février 2022, la France condamne sans équivoque la violation des frontières internationalement reconnues et de la Charte de l'ONU.",
          "Sur le terrain, la France fournit des systèmes d'artillerie CAESAR hautement précis, des missiles SCALP, des blindés légers, des systèmes antiaériens et forme des brigades complètes de l'armée ukrainienne, tout en participant aux sanctions économiques massives de l'Union européenne."
        ],
        keyPoints: [
          "Février 2022 : Riposte diplomatique immédiate et sanctions conjointes",
          "Équipements livrés : Canons CAESAR, missiles à longue portée SCALP, véhicules blindés",
          "Solidarité humanitaire : Accueil de dizaines de milliers de réfugiés et aide médicale continue",
          "Objectif clair : Restaurer l'intégrité territoriale de l'Ukraine dans ses frontières de 1991"
        ],
        imageKey: 'macronZelenskyy',
        imagePosition: 'left',
        statBox: {
          value: 'Fév. 2022',
          label: 'Invasion de l’Ukraine',
          detail: 'Mobilisation totale de la diplomatie et des capacités militaires françaises'
        }
      },
      {
        id: 'scene-5-2',
        badge: 'PROCHE-ORIENT & RECONNAISSANCE HISTORIQUE',
        title: 'La solution à deux États et la reconnaissance de la Palestine',
        subtitle: 'Une position d’équilibre historique réaffirmée en septembre 2025',
        content: [
          "Au Proche-Orient, la diplomatie française maintient une ligne claire et exigeante : le droit inaliénable de l'État d'Israël à vivre en sécurité, et le droit légitime du peuple palestinien à disposer d'un État souverain et viable.",
          "En septembre 2025, la France a franchi une étape historique en reconnaissant officiellement l'État de Palestine, appelant la communauté internationale à relancer des pourparlers de paix authentiques fondés sur le respect des résolutions des Nations Unies."
        ],
        keyPoints: [
          "Ligne constante : Coexistence pacifique de deux États souverains aux côtés de frontières sûres",
          "Septembre 2025 : Reconnaissance officielle de l'État de Palestine par la France",
          "Aide humanitaire d'urgence et soutien médical aux populations civiles à Gaza",
          "Condamnation ferme du terrorisme et appel impératif à la désescalade régionale"
        ],
        imageKey: 'unFlagEmblem',
        imagePosition: 'right'
      },
      {
        id: 'scene-5-3',
        badge: 'AXE INDO-PACIFIQUE & PARTENARIAT AVEC L’INDE',
        title: 'La France, nation riveraine de l’Indo-Pacifique',
        subtitle: 'Un partenariat stratégique scellé dès 1998 fondé sur la souveraineté et la liberté de navigation',
        content: [
          "Avec La Réunion, Mayotte, la Nouvelle-Calédonie et la Polynésie française, la France est une nation souveraine de l'espace Indo-Pacifique abritant plus de 1,6 million de résidents et 90 % de sa zone économique exclusive.",
          "Le partenariat stratégique établi avec l'Inde en 1998 constitue le pilier de cette stratégie : livraisons d'avions de combat Rafale, sous-marins de classe Scorpène, exercices navals réguliers (Varuna) et sécurisation conjointe des routes commerciales de l'océan Indien."
        ],
        keyPoints: [
          "1998 : Signature du partenariat stratégique France–Inde par Jacques Chirac",
          "Coopération industrielle : Vente de Rafale et sous-marins technologiques à l'Inde",
          "Liberté maritime : Présence navale continue contre la piraterie et les revendications unilatérales",
          "Alliance solaire internationale : Co-fondée par la France et l'Inde en marge de la COP21"
        ],
        imageKey: 'natoFranceEuFlags',
        imagePosition: 'left'
      },
      {
        id: 'scene-5-4',
        badge: 'PRÉSIDENCE DU G7 (2026)',
        title: 'Le Sommet d’Évian : Forum de concertation des grandes démocraties',
        subtitle: 'Réunir les grandes économies du 15 au 17 juin 2026 au bord du lac Léman',
        content: [
          "En 2026, la France assure la présidence du G7 (France, États-Unis, Allemagne, Royaume-Uni, Japon, Italie, Canada et Union européenne) et accueille le Sommet des chefs d'État à Évian du 15 au 17 juin 2026.",
          "Ce sommet est dédié aux grandes priorités planétaires : la régulation de l'intelligence artificielle, la transition énergétique décarbonée, la lutte contre les inégalités mondiales et le renforcement des chaînes industrielles critiques face aux crises."
        ],
        keyPoints: [
          "15–17 juin 2026 : Sommet du G7 à Évian-les-Bains sur les rives du lac Léman",
          "Priorités de la présidence française : Climat, santé mondiale, régulation de l'IA, sécurité",
          "Inclusion des nations du Sud : Dialogue élargi avec les grandes économies émergentes",
          "Coordination financière et sécuritaire des démocraties industrielles majeures"
        ],
        imageKey: 'g7Evian2026',
        imagePosition: 'right'
      }
    ]
  },
  {
    id: 'chapitre-06',
    number: '06',
    shortTitle: 'Conclusion',
    title: 'CONCLUSION – LA FRANCE : UNE INFLUENCE MONDIALE',
    subtitle: 'Diplomatie, partenariats, sécurité et responsabilité.',
    presenter: 'Présentateur 06',
    duration: '1,5 minute',
    navIcon: 'Award',
    themeColor: '#244B85',
    typewriterQuote: {
      quote: "« Ni alignement aveugle, ni isolement : la France demeure un pôle d'équilibre, alliant fermeté républicaine, engagement multilatéral et solidarité internationale. »",
      author: "Synthèse républicaine",
      context: "La France dans le monde de demain"
    },
    speakerScript: {
      title: "Conclusion – L'influence mondiale de la France : Bilan et perspectives",
      paragraphs: [
        "En conclusion, la France joue un rôle déterminant dans les affaires internationales grâce à une action combinant coopération régionale, diplomatie mondiale et sécurité collective.",
        "En tant que membre fondateur de l'intégration européenne, la France a profondément contribué à façonner l'union politique, économique et monétaire du continent.",
        "Aux Nations Unies, son siège permanent au Conseil de sécurité lui confère une autorité incontournable dans les délibérations sur le maintien de la paix et le droit international.",
        "À travers l'OTAN, la France contribue activement à la défense collective des démocraties alliées tout en préservant jalousement son autonomie stratégique et sa force de frappe souveraine.",
        "Face aux défis contemporains, la France s'engage résolument : soutien ferme à l'Ukraine agressée, promotion d'une paix juste et durable au Proche-Orient par la reconnaissance de la Palestine, partenariats solides dans l'Indo-Pacifique avec l'Inde, et gouvernance économique concertée au sein du G7.",
        "Toutefois, une telle influence internationale s'accompagne d'immenses responsabilités. La France doit constamment concilier la sauvegarde de ses intérêts vitaux nationaux et les impératifs d'un multilatéralisme solidaire.",
        "En somme, la place de la France dans le monde contemporain repose sur un triptyque fondamental : la force de la diplomatie, la solidité des partenariats et un attachement inébranlable à la paix entre les peuples.",
        "Merci pour votre attention !"
      ]
    },
    scenes: [
      {
        id: 'scene-6-1',
        badge: 'SYNTHÈSE DES ENGAGEMENTS',
        title: 'Les quatre piliers de la présence française dans le monde',
        subtitle: 'Une synergie continue entre institutions multilatérales et partenariats bilatéraux',
        content: [
          "L'analyse de ces six chapitres met en lumière la singularité française : être à la fois un pilier de l'intégration européenne, une puissance fondatrice de l'ordre onusien, un allié de référence au sein de l'OTAN et une voix indépendante attentive aux aspirations du Sud global.",
          "Cette polyvalence diplomatique permet à la France de peser sur les décisions globales sans jamais renoncer à son libre arbitre souverain."
        ],
        keyPoints: [
          "Union Européenne : Moteur politique et promoteur de l'autonomie stratégique",
          "Nations Unies : Membre permanent du Conseil de sécurité et protecteur du droit international",
          "OTAN : Allié crédible et force de dissuasion nucléaire souveraine",
          "Paix mondiale : Partenariats stratégiques majeurs (Inde, Indo-Pacifique) et présidence du G7 2026"
        ],
        imageKey: 'parisDaylightPanorama',
        imagePosition: 'left'
      },
      {
        id: 'scene-6-2',
        badge: 'RESPONSABILITÉ & AVENIR',
        title: 'Concilier souveraineté nationale et solidarité planétaire',
        subtitle: 'Répondre aux défis du XXIe siècle : climat, technologies et régulation des crises',
        content: [
          "Dans un monde multipolaire fragmenté par les rivalités entre superpuissances, la France fait le choix de la nuance et de la concertation.",
          "Elle maintient des voies de communication ouvertes là où d'autres érigent des barrières, confirmant sa vocation de puissance d'équilibre au service d'une mondialisation plus juste et plus durable."
        ],
        keyPoints: [
          "Préservation du multilatéralisme face aux logiques de blocs",
          "Financement solidaire de la transition écologique mondiale",
          "Transmission des valeurs démocratiques et universalistes",
          "Fidélité à la devise républicaine : Liberté, Égalité, Fraternité"
        ],
        imageKey: 'macronPortrait',
        imagePosition: 'right'
      },
      {
        id: 'scene-6-3',
        badge: 'CLÔTURE OFFICIELLE',
        title: 'MERCI POUR VOTRE ATTENTION !',
        subtitle: 'Présentation réalisée pour le séminaire universitaire de relations internationales',
        content: [
          "Nous vous remercions chaleureusement pour votre écoute tout au long de cette traversée documentaire.",
          "Les six présentateurs sont à présent à votre disposition pour échanger et répondre à vos questions sur les différents aspects de la politique étrangère et de la diplomatie française."
        ],
        keyPoints: [
          "Présentateur 01 : Introduction & Identité géopolitique",
          "Présentateur 02 : France et Union européenne",
          "Présentateur 03 : France et Nations Unies (P5 & Accord de Paris)",
          "Présentateur 04 : France et OTAN (Article 5 & Dissuasion)",
          "Présentateur 05 : Défis de la paix (Ukraine, Palestine, Indo-Pacifique, G7)",
          "Présentateur 06 : Conclusion & Bilan synthétique"
        ],
        imageKey: 'frenchFlag',
        imagePosition: 'full'
      }
    ]
  }
];

