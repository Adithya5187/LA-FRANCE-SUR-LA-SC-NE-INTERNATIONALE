import React, { useState } from 'react';
import { Landmark, Globe2, Shield, Handshake, Award, Sparkles, ArrowRight } from 'lucide-react';

interface MatrixPillar {
  id: string;
  title: string;
  organization: string;
  icon: React.ReactNode;
  summary: string;
  achievements: string[];
  frenchLegacy: string;
  badgeColor: string;
}

export const ConclusionMatrix: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('eu');

  const pillars: MatrixPillar[] = [
    {
      id: 'eu',
      title: 'Union Européenne',
      organization: 'Bruxelles & Strasbourg',
      icon: <Landmark className="w-5 h-5 text-blue-300" />,
      summary: 'Moteur fondateur de la construction communautaire depuis 1950, garant de la paix continentale et de l\'intégration de 27 démocraties.',
      achievements: [
        'Initiatrice de la Déclaration Schuman (1950) et de la CECA',
        'Co-architecte du Marché unique et de la zone Euro',
        'Siège du Parlement européen à Strasbourg',
        'Promotion de l\'autonomie stratégique et de la défense européenne'
      ],
      frenchLegacy: 'L\'Europe comme démultiplicateur de souveraineté et espace de solidarité',
      badgeColor: 'border-blue-400/40 bg-blue-500/20 text-blue-300'
    },
    {
      id: 'un',
      title: 'Nations Unies',
      organization: 'Conseil de Sécurité (P5)',
      icon: <Globe2 className="w-5 h-5 text-emerald-300" />,
      summary: 'Membre permanent titulaire du droit de veto, défendant l\'ordre juridique universel, les droits humains et le multilatéralisme solidaire.',
      achievements: [
        'Rédaction de la Déclaration Universelle des Droits de l\'Homme (1948)',
        'Adoption historique de l\'Accord de Paris sur le climat (COP21 en 2015)',
        'Doctrine exemplaire : aucun recours au veto unilatéral depuis 1989',
        'Participation active aux opérations de maintien de la paix (Casques bleus)'
      ],
      frenchLegacy: 'Le sanctuaire du droit international contre la tentation de la force unilatérale',
      badgeColor: 'border-emerald-400/40 bg-emerald-500/20 text-emerald-300'
    },
    {
      id: 'nato',
      title: 'OTAN & Défense',
      organization: 'Bruxelles & Flanc Est',
      icon: <Shield className="w-5 h-5 text-indigo-300" />,
      summary: 'Allié de premier ordre engagé pour la défense collective (Article 5) tout en sanctuarisant son autonomie et sa dissuasion nucléaire.',
      achievements: [
        'Membre fondateur du Traité de l\'Atlantique Nord (1949)',
        'Doctrine gaullienne d\'indépendance nationale et force de frappe souveraine',
        'Réintégration du commandement en 2009 sous préservation nucléaire',
        'Nation-cadre en Roumanie (Mission Aigle) et patrouilles aériennes Rafale'
      ],
      frenchLegacy: 'La fidélité transatlantique conjuguée à la liberté de décision stratégique',
      badgeColor: 'border-indigo-400/40 bg-indigo-500/20 text-indigo-300'
    },
    {
      id: 'peace',
      title: 'Paix & Crises Mondiales',
      organization: 'Ukraine, Palestine, Indo-Pacifique',
      icon: <Handshake className="w-5 h-5 text-red-300" />,
      summary: 'Diplomatie d\'équilibre engagée pour la souveraineté de l\'Ukraine, la justice pour la Palestine, et la liberté de l\'Indo-Pacifique.',
      achievements: [
        'Soutien inconditionnel à l\'Ukraine (canons CAESAR, missiles SCALP, formation)',
        'Reconnaissance officielle de l\'État de Palestine en septembre 2025',
        'Partenariat stratégique d\'exception avec l\'Inde depuis 1998',
        'Stratégie maritime souveraine pour les 1,6 million de Français de l\'Indo-Pacifique'
      ],
      frenchLegacy: 'Une diplomatie du dialogue exigeant au service de la paix durable',
      badgeColor: 'border-red-400/40 bg-red-500/20 text-red-300'
    },
    {
      id: 'g7',
      title: 'Gouvernance Mondiale',
      organization: 'G7 Évian 2026',
      icon: <Award className="w-5 h-5 text-amber-300" />,
      summary: 'Présidence en exercice du G7 réunissant les plus grandes démocraties industrielles pour coordonner les réponses aux défis du siècle.',
      achievements: [
        'Sommet d\'Évian du 15 au 17 juin 2026 sur les rives du lac Léman',
        'Régulation mondiale de l\'intelligence artificielle et éthique numérique',
        'Financement équitable de la transition énergétique vers le zéro carbone',
        'Partenariat renouvelé avec les économies émergentes du Sud'
      ],
      frenchLegacy: 'Un pont de concertation entre les démocraties occidentales et le reste du monde',
      badgeColor: 'border-amber-400/40 bg-amber-500/20 text-amber-300'
    }
  ];

  const activePillar = pillars.find((p) => p.id === selectedId) || pillars[0];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Matrice Récapitulative Globale
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          L'Échiquier de l'Influence Internationale de la France
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          La synthèse interactive des cinq sphères d'engagement analysées au fil de notre exposé.
        </p>
      </div>

      {/* Pillars selector cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {pillars.map((pillar) => {
          const isSelected = pillar.id === selectedId;

          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedId(pillar.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#183159] border-blue-400 ring-2 ring-blue-400/40 shadow-xl scale-102'
                  : 'bg-[#10233F]/40 border-white/5 hover:border-white/20 hover:bg-[#10233F]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-slate-800">
                  {pillar.icon}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {pillar.organization}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Detail View */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${activePillar.badgeColor} inline-block mb-2`}>
              {activePillar.organization}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {activePillar.title}
            </h4>
            <p className="text-sm text-slate-200 mt-2 max-w-2xl leading-relaxed">
              {activePillar.summary}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 max-w-sm shrink-0">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              Héritage Diplomatique Français
            </span>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              « {activePillar.frenchLegacy} »
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
            Contributions et Réalisations Concrètes
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activePillar.achievements.map((ach, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
              >
                <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

