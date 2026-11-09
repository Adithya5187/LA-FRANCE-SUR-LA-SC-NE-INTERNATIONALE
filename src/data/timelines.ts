export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  impact: string;
}

export interface ChapterTimeline {
  chapterId: string;
  title: string;
  subtitle: string;
  events: TimelineEvent[];
}

export const TIMELINES: Record<string, ChapterTimeline> = {
  'chapitre-01': {
    chapterId: 'chapitre-01',
    title: 'Jalons Historiques du Statut International de la France',
    subtitle: 'De la diplomatie classique aux responsabilités mondiales contemporaines',
    events: [
      {
        year: '1648',
        title: 'Traités de Westphalie',
        subtitle: 'Genèse de l’ordre diplomatique moderne',
        description: 'La France s’impose comme garant du premier équilibre étatique européen fondé sur la souveraineté des nations et le droit international coutumier.',
        tag: 'Diplomatie classique',
        impact: 'Fondation du système d’États-nations souverains en Europe'
      },
      {
        year: '1789',
        title: 'Déclaration des Droits de l’Homme',
        subtitle: 'Le rayonnement des idéaux universalistes',
        description: 'Proclamation de l’égalité en droits et des libertés fondamentales, devenant le socle philosophique de l’émancipation humaine à travers le monde.',
        tag: 'Universalité',
        impact: 'Inspiration des démocraties constitutionnelles modernes'
      },
      {
        year: '1945',
        title: 'Siège Permanent au Conseil de Sécurité',
        subtitle: 'Consécration du rang de grande puissance',
        description: 'Grâce à l’engagement de la France libre et de la Résistance, la France intègre le cercle restreint des cinq membres permanents détenant le droit de veto à l’ONU.',
        tag: 'Multilatéralisme',
        impact: 'Rôle d’arbitre permanent dans le maintien de la paix mondiale'
      },
      {
        year: '1960',
        title: 'Déploiement de la Dissuasion Nucléaire',
        subtitle: 'Accession au statut de puissance atomique souveraine',
        description: 'Premier essai réussi dans le Sahara (Gerboise bleue). La France acquiert une capacité de frappe indépendante sanctuarisant son territoire national.',
        tag: 'Dissuasion',
        impact: 'Garantie absolue d’autonomie stratégique et militaire'
      },
      {
        year: '2015',
        title: 'Adoption de l’Accord de Paris (COP21)',
        subtitle: 'Leadership diplomatique planétaire pour le climat',
        description: 'Sous présidence française, 196 nations scellent le premier traité universel juridiquement contraignant pour plafonner le réchauffement climatique.',
        tag: 'Environnement',
        impact: 'Référence mondiale incontestée pour la transition écologique'
      },
      {
        year: '2026',
        title: 'Présidence du G7 à Évian',
        subtitle: 'Concertation des grandes démocraties industrielles',
        description: 'La France accueille les chefs d’État du G7 pour bâtir des régulations communes sur l’IA, l’énergie décarbonée et la sécurité économique.',
        tag: 'Gouvernance',
        impact: 'Dialogue renouvelé entre puissances occidentales et Sud global'
      }
    ]
  },
  'chapitre-02': {
    chapterId: 'chapitre-02',
    title: 'Chronologie de la Construction Européenne',
    subtitle: 'De la déclaration de Robert Schuman aux défis de l’autonomie stratégique',
    events: [
      {
        year: '1950',
        title: 'Déclaration Schuman (9 mai)',
        subtitle: 'La proposition fondatrice du Salon de l’Horloge',
        description: 'Robert Schuman propose la mise en commun des productions de charbon et d’acier de la France et de l’Allemagne, rendant la guerre matériellement impossible.',
        tag: 'Fondation',
        impact: 'Naissance du projet politique européen et de la future UE'
      },
      {
        year: '1951',
        title: 'Création de la CECA',
        subtitle: 'La Communauté Européenne du Charbon et de l’Acier',
        description: 'Signature du traité de Paris unissant les « Six » fondateurs : France, Allemagne de l’Ouest, Italie, Belgique, Pays-Bas et Luxembourg.',
        tag: 'Intégration',
        impact: 'Première délégation souveraine à une autorité supranationale'
      },
      {
        year: '1957',
        title: 'Traités de Rome',
        subtitle: 'Naissance de la CEE et d’Euratom',
        description: 'Mise en place du marché commun agricole et commercial et coopération sur l’énergie atomique pacifique. Impulsion majeure donnée par la France.',
        tag: 'Marché Commun',
        impact: 'Ouverture des frontières et essor économique des Trente Glorieuses'
      },
      {
        year: '1992',
        title: 'Traité de Maastricht',
        subtitle: 'Création formelle de l’Union européenne',
        description: 'Fondation de la citoyenneté européenne, de la politique étrangère et de sécurité commune (PESC) et calendrier vers la monnaie unique.',
        tag: 'Union Politique',
        impact: 'Transformation de la Communauté économique en Union politique'
      },
      {
        year: '2002',
        title: 'Mise en circulation de l’Euro',
        subtitle: 'La monnaie unique entre dans le quotidien des citoyens',
        description: 'L’Euro remplace le franc français et unifie les transactions dans la zone euro, consolidant le poids monétaire de l’Europe face au dollar.',
        tag: 'Monnaie Unique',
        impact: 'Deuxième monnaie de réserve internationale au monde'
      },
      {
        year: '2026',
        title: 'Autonomie Stratégique Européenne',
        subtitle: 'L’affirmation de la souveraineté continentale',
        description: 'Sous impulsion française, renforcement massif des budgets d’armement européen, réindustrialisation verte et protection des technologies d’avenir.',
        tag: 'Souveraineté',
        impact: 'L’Europe s’affirme comme une puissance géopolitique à part entière'
      }
    ]
  },
  'chapitre-03': {
    chapterId: 'chapitre-03',
    title: 'La France aux Nations Unies : Repères Fondateurs',
    subtitle: 'Du Palais de Chaillot à Manhattan, l’action française pour le multilatéralisme',
    events: [
      {
        year: '1945',
        title: 'Création de l’ONU à San Francisco',
        subtitle: 'La France parmi les membres fondateurs',
        description: 'Signature de la Charte des Nations Unies le 26 juin 1945. La France obtient son siège permanent au Conseil de sécurité et le droit de veto.',
        tag: 'Fondation ONU',
        impact: 'Consécration constitutionnelle de la diplomatie française'
      },
      {
        year: '1948',
        title: 'Déclaration Universelle des Droits de l’Homme',
        subtitle: 'Adoption historique au Palais de Chaillot à Paris',
        description: 'Rédigée sous la houlette du juriste français René Cassin (prix Nobel de la paix), cette déclaration proclame les droits inaliénables de chaque individu.',
        tag: 'Droits de l’Homme',
        impact: 'Texte juridique et moral de référence le plus traduit au monde'
      },
      {
        year: '1960s',
        title: 'Décolonisation & Présence auprès des Pays Émergents',
        subtitle: 'Une relation privilégiée avec les nouveaux États indépendants',
        description: 'Soutien aux vagues d’adhésion des nouveaux États souverains africains et asiatiques, ancrant la Francophonie au sein des assemblées onusiennes.',
        tag: 'Émancipation',
        impact: 'Élargissement de la représentativité mondiale de l’ONU'
      },
      {
        year: '2003',
        title: 'Discours de Dominique de Villepin',
        subtitle: 'Défense de la légalité internationale contre la guerre unilatérale',
        description: 'Devant le Conseil de sécurité, la France refuse d’approuver l’invasion de l’Irak sans mandat explicite de l’ONU, défendant le respect du droit international.',
        tag: 'Droit International',
        impact: 'Symbole marquant du refus français de l’alignement automatique'
      },
      {
        year: '2015',
        title: 'Accord de Paris sur le Climat (COP21)',
        subtitle: 'Le triomphe du consensus écologique universel',
        description: '196 parties s’accordent pour contenir la hausse des températures sous les 2 °C. Succès historique de la méthode de négociation française.',
        tag: 'Climat Mondial',
        impact: 'Cadre normatif contraignant pour la neutralité carbone mondiale'
      },
      {
        year: '2026',
        title: 'Encadrement du Droit de Veto',
        subtitle: 'Initiative conjointe pour débloquer le Conseil de sécurité',
        description: 'La France milite activement avec le Mexique pour la suspension volontaire de l’usage du veto par les membres permanents en cas de crimes de masse.',
        tag: 'Réforme ONU',
        impact: 'Restauration de la crédibilité de l’action multilatérale'
      }
    ]
  },
  'chapitre-04': {
    chapterId: 'chapitre-04',
    title: 'L’Histoire Singulière de la France au sein de l’OTAN',
    subtitle: 'Entre solidarité transatlantique et indépendance gaullienne',
    events: [
      {
        year: '1949',
        title: 'Signature du Traité de Washington (4 avril)',
        subtitle: 'La France co-fondatrice de l’Alliance atlantique',
        description: 'Douze pays occidentaux s’unissent face au bloc soviétique. La France consacre l’Article 5 pour garantir la sécurité mutuelle de l’Europe.',
        tag: 'Fondation OTAN',
        impact: 'Mise en place du bouclier défensif occidental d’après-guerre'
      },
      {
        year: '1966',
        title: 'Décision Historique de Charles de Gaulle',
        subtitle: 'Retrait du commandement militaire intégré',
        description: 'Le Général de Gaulle notifie le départ des troupes françaises du commandement intégré et demande l’évacuation des bases américaines en France.',
        tag: 'Indépendance',
        impact: 'Maîtrise absolue et souveraine de l’arsenal nucléaire français'
      },
      {
        year: '1990s',
        title: 'Coopération Opérationnelle dans les Balkans',
        subtitle: 'Participation active aux missions IFOR et KFOR',
        description: 'Bien que hors commandement intégré, les armées françaises fournissent d’importants contingents pour restaurer la paix en Bosnie et au Kosovo.',
        tag: 'Intervention',
        impact: 'Démonstration de la fiabilité militaire de la France auprès de ses alliés'
      },
      {
        year: '2009',
        title: 'Réintégration du Commandement Intégré',
        subtitle: 'Décision du président Nicolas Sarkozy au Sommet de Strasbourg-Kehl',
        description: 'La France réintègre les états-majors de planification alliée, tout en sanctuarisant la pleine autonomie de ses forces de frappe nucléaires.',
        tag: 'Réintégration',
        impact: 'Influence directe sur les décisions de planification stratégique de l’OTAN'
      },
      {
        year: '2022',
        title: 'Déploiement sur le Flanc Oriental (Mission Aigle)',
        subtitle: 'Nation-cadre en Roumanie face à la menace russe',
        description: 'Dès les premiers jours de l’invasion de l’Ukraine, la France déploie des troupes d’élite, des chars Leclerc et des systèmes MAMBA à Cincu en Roumanie.',
        tag: 'Défense Active',
        impact: 'Protection concrète de la frontière orientale de l’Alliance'
      },
      {
        year: '2026',
        title: 'Pilier Européen de l’Alliance',
        subtitle: 'Interopérabilité Rafale et autonomie technologique',
        description: 'Modernisation continue des forces aérospatiales françaises, dissuasion permanente assurée par les SNLE et promotion d’une défense européenne crédible.',
        tag: 'Dissuasion',
        impact: 'Équilibre entre loyauté à l’OTAN et souveraineté capacitaire'
      }
    ]
  },
  'chapitre-05': {
    chapterId: 'chapitre-05',
    title: 'Défis Contemporains de la Paix : Chronologie Récente',
    subtitle: 'Ukraine, Proche-Orient, Indo-Pacifique et G7 d’Évian',
    events: [
      {
        year: '1998',
        title: 'Pacte Stratégique France-Inde',
        subtitle: 'Fondation de l’axe d’équilibre en Indo-Pacifique',
        description: 'Jacques Chirac et Atal Bihari Vajpayee scellent un partenariat d’exception dans la défense, le nucléaire civil, l’aéronautique (Rafale) et l’espace.',
        tag: 'Partenariat',
        impact: 'Pilier de la stabilité et de la liberté maritime dans l’océan Indien'
      },
      {
        year: '2022',
        title: 'Invasion Russe de l’Ukraine (24 février)',
        subtitle: 'Soutien inébranlable de la France à Kiev',
        description: 'Condamnation immédiate de l’agression russe, livraison massive de canons CAESAR, de missiles SCALP, de blindés et formation de brigades ukrainiennes.',
        tag: 'Ukraine',
        impact: 'Rôle pivot de la France dans la coordination du soutien européen'
      },
      {
        year: '2023',
        title: 'Mission Maritime en Mer Rouge & Indo-Pacifique',
        subtitle: 'Défense de la liberté de navigation internationale',
        description: 'La frégate multimission française Languedoc et les navires de la Marine nationale neutralisent les attaques de drones pour sécuriser le commerce mondial.',
        tag: 'Sécurité Maritime',
        impact: 'Protection des routes maritimes reliant l’Asie et l’Europe'
      },
      {
        year: '2025',
        title: 'Reconnaissance de l’État de Palestine (Septembre)',
        subtitle: 'Engagement décisif pour la solution à deux États',
        description: 'La France reconnaît officiellement l’État de Palestine, appelant à un processus de paix fondé sur la coexistence de deux États souverains.',
        tag: 'Proche-Orient',
        impact: 'Signal diplomatique historique réaffirmant le droit des peuples'
      },
      {
        year: '2026',
        title: 'Présidence Française du G7 & Sommet d’Évian',
        subtitle: '15 au 17 juin 2026 au bord du lac Léman',
        description: 'Réunion des dirigeants des démocraties les plus industrialisées : concertation sur l’IA éthique, le financement climatique et la stabilité économique.',
        tag: 'G7 Évian',
        impact: 'Plateforme majeure pour forger des consensus géopolitiques vitaux'
      }
    ]
  },
  'chapitre-06': {
    chapterId: 'chapitre-06',
    title: 'La Trajectoire Universelle de la France : Rétrospective',
    subtitle: 'La synthèse des grandes étapes diplomatiques et leur cohérence géopolitique',
    events: [
      {
        year: '1945',
        title: 'Sanctuaire Onusien',
        subtitle: 'Membre permanent du Conseil de sécurité',
        description: 'Garant du droit international et détentrice du veto pour prévenir les conflits armés majeurs.',
        tag: 'ONU',
        impact: 'Responsabilité mondiale permanente'
      },
      {
        year: '1950',
        title: 'Genèse Européenne',
        subtitle: 'Déclaration Schuman au Quai d’Orsay',
        description: 'Initiatrice du projet d’intégration pacifique européenne unissant 27 nations aujourd’hui.',
        tag: 'UE',
        impact: 'Plus longue période de paix sur le sol européen'
      },
      {
        year: '1966',
        title: 'Autonomie Stratégique',
        subtitle: 'Refus de la soumission de bloc',
        description: 'Sanctuarisation de la souveraineté militaire et de la force de frappe nucléaire indépendante.',
        tag: 'OTAN',
        impact: 'Crédibilité intacte d’une puissance d’équilibre'
      },
      {
        year: '2015',
        title: 'Pacte Climatique Mondial',
        subtitle: 'L’Accord de Paris',
        description: 'Capacité démontrée de la France à rassembler 196 États autour d’un destin environnemental commun.',
        tag: 'Climat',
        impact: 'Boussole internationale de la transition énergétique'
      },
      {
        year: '2025-26',
        title: 'Action pour la Paix & G7 Évian',
        subtitle: 'Reconnaissance de la Palestine & G7 2026',
        description: 'Médiation résolue pour la paix au Proche-Orient, soutien à l’Ukraine et présidence du G7.',
        tag: 'Avenir',
        impact: 'Affirmation d’une France engagée, responsable et respectée'
      }
    ]
  }
};

