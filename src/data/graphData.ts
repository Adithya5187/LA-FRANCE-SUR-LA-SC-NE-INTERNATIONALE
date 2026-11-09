export interface PillarData {
  id: string;
  name: string;
  iconName: string;
  metric: string;
  metricLabel: string;
  description: string;
  indicators: { label: string; score: number; detail: string }[];
}

export const PILLARS_CHAPTER_1: PillarData[] = [
  {
    id: 'diplomatie',
    name: 'Réseau Diplomatique',
    iconName: 'Globe',
    metric: '3e Mondial',
    metricLabel: 'Réseau diplomatique international',
    description: 'Présence permanente dans plus de 160 pays avec ambassades, consulats et représentations multilatérales au cœur des grands arbitrages.',
    indicators: [
      { label: 'Ambassades & Consulats', score: 96, detail: '163 ambassades et 89 consulats généraux' },
      { label: 'Influence Multilatérale (ONU, UE, G7)', score: 98, detail: 'Siège permanent Conseil de sécurité ONU' },
      { label: 'Médiation Internationale de Paix', score: 92, detail: 'Dialogue actif sur tous les théâtres de crise' },
      { label: 'Diplomatie Climatique & Environnementale', score: 95, detail: 'Porteuse de l’Accord de Paris COP21' }
    ]
  },
  {
    id: 'militaire',
    name: 'Puissance Militaire & Dissuasion',
    iconName: 'Shield',
    metric: '1re en UE',
    metricLabel: 'Capacité de projection & dissuasion autonome',
    description: 'Armée professionnelle complète disposant d’une composante nucléaire souveraine indépendante (SNLE et Rafale aéroportés).',
    indicators: [
      { label: 'Dissuasion Nucléaire Autonome', score: 100, detail: 'Seule puissance nucléaire de l’Union européenne' },
      { label: 'Projection Aérospatiale (Rafale)', score: 92, detail: 'Flotte omnirôle projetable sous 48h partout dans le monde' },
      { label: 'Marine Nationale & Porte-avions', score: 90, detail: 'Porte-avions Charles de Gaulle à propulsion nucléaire' },
      { label: 'Interventions Multilatérales & OTAN', score: 94, detail: 'Nation-cadre sur le flanc oriental de l’Alliance' }
    ]
  },
  {
    id: 'economie',
    name: 'Poids Économique & Industriel',
    iconName: 'TrendingUp',
    metric: '7e PIB Mondial',
    metricLabel: 'Plus de 3 000 milliards de dollars',
    description: 'Pôle d’excellence mondial dans l’aéronautique, l’énergie nucléaire décarbonée, le luxe, l’agroalimentaire et les technologies d’avenir.',
    indicators: [
      { label: 'PIB Mondial (7e place)', score: 88, detail: 'Moteur central du marché unique de l’UE' },
      { label: 'Attractivité pour les Investissements (Choose France)', score: 94, detail: '1re destination européenne pour les investissements étrangers' },
      { label: 'Industries de Pointe (Aéronautique, IA, Spatial)', score: 91, detail: 'Airbus, Dassault, Ariane, Mistral AI' },
      { label: 'Énergie Décarbonée & Électricité Bas-Carbone', score: 96, detail: 'Parc nucléaire garantissant l’indépendance énergétique' }
    ]
  },
  {
    id: 'culture',
    name: 'Rayonnement Culturel & Francophonie',
    iconName: 'Sparkles',
    metric: '321M+',
    metricLabel: 'Locuteurs francophones dans le monde',
    description: 'Première destination touristique mondiale, berceau des droits de l’homme, de la gastronomie et de la pensée philosophique des Lumières.',
    indicators: [
      { label: 'Fréquentation Touristique Mondiale (1re place)', score: 99, detail: 'Plus de 100 millions de visiteurs internationaux par an' },
      { label: 'Espace Francophone International', score: 90, detail: 'Langue officielle aux Nations Unies, UE, CIO et CPI' },
      { label: 'Instituts Français & Réseau des Alliances Françaises', score: 95, detail: 'Plus de 800 alliances dans 130 pays' },
      { label: 'Patrimoine Immatériel & Valeurs Républicaines', score: 97, detail: 'Philosophie des Lumières et Droits humains universels' }
    ]
  }
];

export interface EUMemberCountry {
  code: string;
  name: string;
  joined: number;
  isFounding: boolean;
  isFrance: boolean;
  capital: string;
  population: string;
}

export const EU_MEMBERS_27: EUMemberCountry[] = [
  { code: 'FR', name: 'France', joined: 1951, isFounding: true, isFrance: true, capital: 'Paris', population: '68,4 M' },
  { code: 'DE', name: 'Allemagne', joined: 1951, isFounding: true, isFrance: false, capital: 'Berlin', population: '84,4 M' },
  { code: 'IT', name: 'Italie', joined: 1951, isFounding: true, isFrance: false, capital: 'Rome', population: '58,9 M' },
  { code: 'BE', name: 'Belgique', joined: 1951, isFounding: true, isFrance: false, capital: 'Bruxelles', population: '11,8 M' },
  { code: 'NL', name: 'Pays-Bas', joined: 1951, isFounding: true, isFrance: false, capital: 'Amsterdam', population: '17,9 M' },
  { code: 'LU', name: 'Luxembourg', joined: 1951, isFounding: true, isFrance: false, capital: 'Luxembourg', population: '0,66 M' },
  { code: 'IE', name: 'Irlande', joined: 1973, isFounding: false, isFrance: false, capital: 'Dublin', population: '5,2 M' },
  { code: 'DK', name: 'Danemark', joined: 1973, isFounding: false, isFrance: false, capital: 'Copenhague', population: '5,9 M' },
  { code: 'GR', name: 'Grèce', joined: 1981, isFounding: false, isFrance: false, capital: 'Athènes', population: '10,4 M' },
  { code: 'ES', name: 'Espagne', joined: 1986, isFounding: false, isFrance: false, capital: 'Madrid', population: '48,1 M' },
  { code: 'PT', name: 'Portugal', joined: 1986, isFounding: false, isFrance: false, capital: 'Lisbonne', population: '10,4 M' },
  { code: 'AT', name: 'Autriche', joined: 1995, isFounding: false, isFrance: false, capital: 'Vienne', population: '9,1 M' },
  { code: 'SE', name: 'Suède', joined: 1995, isFounding: false, isFrance: false, capital: 'Stockholm', population: '10,5 M' },
  { code: 'FI', name: 'Finlande', joined: 1995, isFounding: false, isFrance: false, capital: 'Helsinki', population: '5,6 M' },
  { code: 'PL', name: 'Pologne', joined: 2004, isFounding: false, isFrance: false, capital: 'Varsovie', population: '37,7 M' },
  { code: 'CZ', name: 'Tchéquie', joined: 2004, isFounding: false, isFrance: false, capital: 'Prague', population: '10,8 M' },
  { code: 'HU', name: 'Hongrie', joined: 2004, isFounding: false, isFrance: false, capital: 'Budapest', population: '9,6 M' },
  { code: 'SK', name: 'Slovaquie', joined: 2004, isFounding: false, isFrance: false, capital: 'Bratislava', population: '5,4 M' },
  { code: 'SI', name: 'Slovénie', joined: 2004, isFounding: false, isFrance: false, capital: 'Ljubljana', population: '2,1 M' },
  { code: 'EE', name: 'Estonie', joined: 2004, isFounding: false, isFrance: false, capital: 'Tallinn', population: '1,3 M' },
  { code: 'LV', name: 'Lettonie', joined: 2004, isFounding: false, isFrance: false, capital: 'Riga', population: '1,8 M' },
  { code: 'LT', name: 'Lituanie', joined: 2004, isFounding: false, isFrance: false, capital: 'Vilnius', population: '2,8 M' },
  { code: 'CY', name: 'Chypre', joined: 2004, isFounding: false, isFrance: false, capital: 'Nicosie', population: '1,2 M' },
  { code: 'MT', name: 'Malte', joined: 2004, isFounding: false, isFrance: false, capital: 'La Valette', population: '0,5 M' },
  { code: 'RO', name: 'Roumanie', joined: 2007, isFounding: false, isFrance: false, capital: 'Bucarest', population: '19,0 M' },
  { code: 'BG', name: 'Bulgarie', joined: 2007, isFounding: false, isFrance: false, capital: 'Sofia', population: '6,4 M' },
  { code: 'HR', name: 'Croatie', joined: 2013, isFounding: false, isFrance: false, capital: 'Zagreb', population: '3,8 M' }
];

export interface UNP5Member {
  code: string;
  name: string;
  flag: string;
  isFrance: boolean;
  status: string;
  vetoDoctrine: string;
  keyRole: string;
}

export const UN_P5_MEMBERS: UNP5Member[] = [
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    isFrance: true,
    status: 'Membre Permanent (P5)',
    vetoDoctrine: 'Usage responsable & encadrement en cas d’atrocités de masse (aucun veto unilatéral depuis 1989)',
    keyRole: 'Porteuse du multilatéralisme, promotrice des droits de l’homme, de l’Accord de Paris sur le climat et des résolutions de paix au Proche-Orient.'
  },
  {
    code: 'US',
    name: 'États-Unis',
    flag: '🇺🇸',
    isFrance: false,
    status: 'Membre Permanent (P5)',
    vetoDoctrine: 'Usage fréquent pour protéger ses intérêts stratégiques et ses alliés',
    keyRole: 'Première puissance financière et militaire de l’ONU, hébergeur du siège à New York.'
  },
  {
    code: 'GB',
    name: 'Royaume-Uni',
    flag: '🇬🇧',
    isFrance: false,
    status: 'Membre Permanent (P5)',
    vetoDoctrine: 'Aligné sur la doctrine de non-recours unilatéral depuis 1989',
    keyRole: 'Partenaire historique européen de la France sur les résolutions de sécurité collective.'
  },
  {
    code: 'RU',
    name: 'Fédération de Russie',
    flag: '🇷🇺',
    isFrance: false,
    status: 'Membre Permanent (P5)',
    vetoDoctrine: 'Recours systématique pour bloquer les résolutions sur l’Ukraine et la Syrie',
    keyRole: 'Successeur du siège de l’URSS depuis 1991, source de blocages institutionnels majeurs.'
  },
  {
    code: 'CN',
    name: 'Chine',
    flag: '🇨🇳',
    isFrance: false,
    status: 'Membre Permanent (P5)',
    vetoDoctrine: 'Veto fréquent en coordination avec la Russie ou sur les questions de souveraineté',
    keyRole: 'Deuxième puissance économique, insistance sur la non-ingérence dans les affaires intérieures.'
  }
];

export interface GeopoliticalHotspot {
  id: string;
  name: string;
  category: string;
  coordinates: { x: number; y: number }; // Percentage on SVG map
  title: string;
  frenchEngagement: string;
  actions: string[];
  keyDate: string;
  statusTag: string;
}

export const GEOPOLITICAL_HOTSPOTS: GeopoliticalHotspot[] = [
  {
    id: 'ukraine',
    name: 'Ukraine & Flanc Est',
    category: 'Souveraineté & Défense',
    coordinates: { x: 57, y: 32 },
    title: 'Soutien à la Souveraineté et à l’Intégrité Territoriale',
    frenchEngagement: 'Condamnation absolue de l’invasion russe de février 2022. Livraison d’armes d’artillerie de haute précision (canons CAESAR), de missiles longue portée SCALP, véhicules blindés et commandement de la mission Aigle de l’OTAN en Roumanie.',
    actions: [
      'Fourniture de canons CAESAR et munitions téléopérées',
      'Formation de la brigade ukrainienne « Anne de Kyiv » par l’armée de Terre',
      'Aide humanitaire d’urgence et accueil des familles réfugiées',
      'Coordination des sanctions économiques massives de l’Union européenne'
    ],
    keyDate: 'Février 2022 – Présent',
    statusTag: 'Soutien Actif Continu'
  },
  {
    id: 'palestine-israel',
    name: 'Proche-Orient (Israël & Palestine)',
    category: 'Paix & Droit International',
    coordinates: { x: 58, y: 44 },
    title: 'Solution à Deux États & Reconnaissance de la Palestine',
    frenchEngagement: 'Défense inlassable d’une paix juste et durable fondée sur la coexistence pacifique de deux États souverains. En septembre 2025, la France a officiellement reconnu l’État de Palestine pour réenclencher une dynamique diplomatique irréversible.',
    actions: [
      'Reconnaissance officielle de l’État de Palestine en septembre 2025',
      'Appui humanitaire maritime et aérien continu pour les populations civiles',
      'Sécurisation des frontières d’Israël et rejet ferme du terrorisme',
      'Plaidoyer pour un cessez-le-feu pérenne et la libération de tous les otages'
    ],
    keyDate: 'Septembre 2025',
    statusTag: 'Reconnaissance Officielle'
  },
  {
    id: 'india',
    name: 'Inde (Partenariat Stratégique)',
    category: 'Partenariat Stratégique Majeur',
    coordinates: { x: 71, y: 48 },
    title: 'Axe Paris – New Delhi depuis 1998',
    frenchEngagement: 'Scellé par Jacques Chirac en 1998, ce partenariat d’exception sans équivalent unit deux nations indépendantes et démocratiques dans la défense souveraine, l’énergie nucléaire civile, l’espace et l’océan Indien.',
    actions: [
      'Contrats majeurs de Rafale (Air et Marine) et sous-marins Scorpène',
      'Manœuvres navales bilatérales régulières Varuna dans l’océan Indien',
      'Co-présidence de l’Alliance Solaire Internationale',
      'Soutien constant de la France pour l’adhésion de l’Inde comme membre permanent du CS ONU'
    ],
    keyDate: '1998 – Partenariat Historique',
    statusTag: 'Alliance d’Exception'
  },
  {
    id: 'indopacific',
    name: 'Bassin Indo-Pacifique',
    category: 'Présence Territoriale Souveraine',
    coordinates: { x: 82, y: 64 },
    title: 'La France, Nation Riveraine Souveraine',
    frenchEngagement: 'Grâce à La Réunion, Mayotte, la Nouvelle-Calédonie et la Polynésie française, 1,6 million de citoyens français vivent dans l’Indo-Pacifique. La France y défend un ordre fondé sur la liberté de navigation maritime.',
    actions: [
      '1,6 million de concitoyens résidant dans la région Indo-Pacifique',
      '93 % de la zone économique exclusive (ZEE) française située dans ces océans',
      'Forces armées souveraines prépositionnées (FAZSOI, FANC, FAPF)',
      'Refus de la bipolarisation et garantie de la liberté de navigation commerciale'
    ],
    keyDate: 'Stratégie Indo-Pacifique 2018-2026',
    statusTag: 'Souveraineté Maritime'
  },
  {
    id: 'france-evian',
    name: 'France – Sommet du G7 à Évian',
    category: 'Gouvernance Mondiale 2026',
    coordinates: { x: 49, y: 34 },
    title: 'Présidence Française du G7 (15–17 Juin 2026)',
    frenchEngagement: 'La France préside le groupe des 7 plus grandes économies industrialisées démocratiques et accueille le Sommet mondial à Évian-les-Bains sur les rives du lac Léman pour réguler les défis globaux majeurs.',
    actions: [
      'Concertation sur la régulation éthique et sécuritaire de l’IA',
      'Accélération des financements pour la transition énergétique décarbonée',
      'Dialogue de haut niveau avec les dirigeants invités d’Afrique et d’Asie',
      'Solidarité économique mondiale et résilience des chaînes industrielles critiques'
    ],
    keyDate: '15–17 Juin 2026',
    statusTag: 'Présidence en Exercice'
  }
];

