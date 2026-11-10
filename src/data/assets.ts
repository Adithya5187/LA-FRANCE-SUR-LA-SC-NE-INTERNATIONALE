export interface AssetMeta {
  path: string;
  alt: string;
  caption: string;
  credit?: string;
  category: 'paris' | 'france' | 'eu' | 'un' | 'nato' | 'world-peace' | 'g7';
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const asset = (relPath: string) => `${base}/assets/${relPath}`;

export const ASSETS = {
  // Paris & Hero & Conclusion
  parisSunsetEiffel: {
    path: asset('paris/paris-eiffel-sunset-flag.jpeg'),
    alt: 'Vue panoramique de Paris au coucher du soleil avec drapeau français et Tour Eiffel',
    caption: 'Paris, capitale diplomatique et cœur historique de la République française.',
    credit: 'Photographie panoramique de Paris',
    category: 'paris',
  },
  parisDaylightPanorama: {
    path: asset('paris/paris-panorama-daylight.jpeg'),
    alt: 'Vue aérienne de Paris en journée avec la Tour Eiffel et l’architecture haussmannienne',
    caption: 'Perspective urbaine sur la Ville Lumière et le rayonnement culturel français.',
    category: 'paris',
  },

  // France & Leaders & Global
  frenchFlag: {
    path: asset('france/french-flag-tricolor.jpeg'),
    alt: 'Drapeau tricolore de la République française',
    caption: 'Bleu, Blanc, Rouge : les couleurs républicaines de la liberté, de l’égalité et de la fraternité.',
    category: 'france',
  },
  franceGlobe3D: {
    path: asset('france/france-global-globe.jpeg'),
    alt: 'Globe terrestre numérique centré sur la France rayonnant à l’échelle planétaire',
    caption: 'Réseau d’alliances et présence diplomatique française sur les cinq continents.',
    category: 'france',
  },
  franceOutreMer: {
    path: asset('france/france-outre-mer-map.jpeg'),
    alt: 'Carte des territoires d’Outre-Mer français à travers le monde',
    caption: 'La France des Outre-Mer : une présence maritime et stratégique mondiale (DROM-COM).',
    credit: 'Sénat de la République française',
    category: 'france',
  },
  macronPortrait: {
    path: asset('france/emmanuel-macron-portrait.jpeg'),
    alt: 'Portrait officiel du Président Emmanuel Macron',
    caption: 'Emmanuel Macron, Président de la République française, garant des institutions et de la diplomatie.',
    credit: 'Présidence de la République',
    category: 'france',
  },

  // European Union
  euFlagWaving: {
    path: asset('eu/eu-flag-waving.jpeg'),
    alt: 'Drapeau de l’Union européenne flottant dans le ciel',
    caption: 'Le drapeau européen aux douze étoiles dorées, symbole d’unité et de solidarité continentale.',
    category: 'eu',
  },
  euFlagOfficial: {
    path: asset('eu/eu-flag-official.jpeg'),
    alt: 'Drapeau officiel de l’Union européenne',
    caption: 'L’Union européenne regroupe 27 États membres dans un projet de paix et d’intégration.',
    category: 'eu',
  },
  robertSchuman: {
    path: asset('eu/robert-schuman-portrait.jpeg'),
    alt: 'Portrait historique de Robert Schuman, ministre des Affaires étrangères français',
    caption: 'Robert Schuman, auteur de la Déclaration historique du 9 mai 1950, père fondateur de l’Europe.',
    category: 'eu',
  },
  jeanMonnet: {
    path: asset('eu/jean-monnet-portrait.jpeg'),
    alt: 'Portrait historique de Jean Monnet',
    caption: 'Jean Monnet, commissaire au Plan et inspirateur de la réconciliation franco-allemande.',
    category: 'eu',
  },

  // United Nations
  unFlagEmblem: {
    path: asset('un/un-flag-emblem.jpeg'),
    alt: 'Drapeau et emblème officiel de l’Organisation des Nations Unies',
    caption: 'L’emblème de l’ONU : une carte du monde ceinte de rameaux d’olivier, symboles de paix universelle.',
    category: 'un',
  },
  unHqNewYork: {
    path: asset('un/un-hq-newyork.jpeg'),
    alt: 'Bâtiment du Siège de l’Organisation des Nations Unies à New York',
    caption: 'Le siège emblématique de l’ONU à Manhattan, carrefour de la gouvernance mondiale multilatérale.',
    category: 'un',
  },
  unSecurityCouncilChamber: {
    path: asset('un/un-security-council-chamber.jpeg'),
    alt: 'Chambre du Conseil de sécurité des Nations Unies avec la table circulaire et la fresque de Krohg',
    caption: 'La salle du Conseil de sécurité de l’ONU : le sanctuaire des délibérations sur la paix et la sécurité.',
    credit: 'Photo ONU',
    category: 'un',
  },
  macronUnGeneralAssembly: {
    path: asset('un/macron-un-general-assembly.jpeg'),
    alt: 'Emmanuel Macron à la tribune de l’Assemblée générale de l’ONU',
    caption: 'Discours du chef de l’État français à la tribune de l’Assemblée générale des Nations Unies.',
    category: 'un',
  },
  franceSecurityCouncilDelegate: {
    path: asset('un/france-security-council-delegate.jpeg'),
    alt: 'Représentant permanent de la France siégeant au Conseil de sécurité de l’ONU',
    caption: 'La délégation française au Conseil de sécurité défendant le droit international et le droit de veto.',
    category: 'un',
  },

  // NATO
  natoHqBrussels: {
    path: asset('nato/nato-hq-brussels.jpeg'),
    alt: 'Siège de l’OTAN à Bruxelles avec les mâts des drapeaux des États alliés',
    caption: 'Le siège de l’OTAN à Bruxelles : alliance transatlantique de défense collective.',
    category: 'nato',
  },
  natoCompassLogo: {
    path: asset('nato/nato-compass-logo.jpeg'),
    alt: 'Emblème de l’étoile boussole de l’OTAN',
    caption: 'La rose des vents de l’OTAN, symbole de direction commune et de sécurité partagée.',
    category: 'nato',
  },
  charlesDeGaulle1966: {
    path: asset('nato/charles-de-gaulle-1966.jpeg'),
    alt: 'Conférence de presse historique du Général Charles de Gaulle en 1966',
    caption: 'Le Général de Gaulle expliquant en 1966 le retrait français du commandement intégré de l’OTAN.',
    category: 'nato',
  },
  natoFranceEuFlags: {
    path: asset('nato/nato-france-eu-flags.jpeg'),
    alt: 'Drapeaux de l’OTAN, de la France et de l’Union européenne flottant face à l’océan',
    caption: 'Complémentarité stratégique : Alliance atlantique, souveraineté française et défense européenne.',
    category: 'nato',
  },
  dassaultRafale: {
    path: asset('nato/dassault-rafale.jpeg'),
    alt: 'Avion de combat Dassault Rafale de l’Armée de l’Air et de l’Espace',
    caption: 'Le Rafale omnirôle de Dassault Aviation : fer de lance de la dissuasion et des forces armées françaises.',
    credit: 'Dassault Aviation – G. Gosset',
    category: 'nato',
  },

  // World Peace Challenges
  macronZelenskyy: {
    path: asset('world-peace/macron-zelenskyy.jpeg'),
    alt: 'Emmanuel Macron et Volodymyr Zelenskyy au Palais de l’Élysée',
    caption: 'Soutien indéfectible de la France à la souveraineté et à l’intégrité territoriale de l’Ukraine.',
    credit: 'Présidence de la République – Élysée',
    category: 'world-peace',
  },

  // G7
  g7Evian2026: {
    path: asset('g7/g7-evian-2026.jpeg'),
    alt: 'Monument officiel G7 France Évian 2026',
    caption: 'Présidence française du G7 : Sommet d’Évian du 15 au 17 juin 2026 au bord du lac Léman.',
    category: 'g7',
  },
} as const;
