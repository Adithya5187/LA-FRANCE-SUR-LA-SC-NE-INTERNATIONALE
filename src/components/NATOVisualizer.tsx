import React, { useState } from 'react';
import { Shield, ShieldAlert, Award, Plane, CheckCircle2 } from 'lucide-react';

export const NATOVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'article5' | 'comparison' | 'capabilities'>('article5');

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Shield className="w-3.5 h-3.5" />
            Architecture Stratégique de l'OTAN
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Défense Collective, Article 5 & Singularité Française
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Comprendre le principe d'assistance mutuelle et l'autonomie stratégique cultivée par la France.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10">
          <button
            onClick={() => setActiveTab('article5')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'article5' ? 'bg-[#244B85] text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            L'Article 5
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'comparison' ? 'bg-[#244B85] text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            1966 vs 2009
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'capabilities' ? 'bg-[#244B85] text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Capacités Modernes
          </button>
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'article5' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              Principe Fondamental du Traité de Washington (1949)
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              « Un pour tous, tous pour un » : La Clause d'Assistance Mutuelle
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              L'Article 5 stipule qu'une attaque armée contre l'un des pays membres en Europe ou en Amérique du Nord est considérée comme une attaque dirigée contre l'ensemble des pays alliés. Chaque membre s'engage à prêter assistance à la partie attaquée, y compris par l'emploi des forces armées.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-bold text-blue-400 block mb-1">
                  Solidarité Opérationnelle
                </span>
                <p className="text-xs text-slate-300">
                  Déclenchée pour la seule fois de l'histoire après le 11 septembre 2001, attestant de la cohésion transatlantique face aux agressions majeures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-bold text-emerald-400 block mb-1">
                  Sanctuaire Nucléaire Français
                </span>
                <p className="text-xs text-slate-300">
                  La force de frappe française contribue de façon autonome à la dissuasion globale de l'Alliance sans être intégrée dans la planification nucléaire de l'OTAN.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#244B85]/40 to-[#10233F] border border-blue-400/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block mb-2">
                Le Rôle Spécifique de la France
              </span>
              <h5 className="text-lg font-bold text-white mb-3">
                Allié Fiable, Maître de sa Décision
              </h5>
              <p className="text-xs text-slate-200 leading-relaxed mb-4">
                La France demeure le seul État de l'Union européenne doté d'une armée complète, souveraine et d'une dissuasion nucléaire strictement nationale.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Zéro base militaire étrangère sur le territoire métropolitain
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Ordre de tir nucléaire sous la responsabilité exclusive du chef de l'État
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Présence réactive sur le flanc oriental européen
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-2xl font-black text-white font-mono block">
                32
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                Nations Alliées au Sein de l'OTAN
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'comparison' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#10233F]/90 border border-amber-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                1966 – Général Charles de Gaulle
              </span>
              <span className="text-xs text-slate-400 font-mono">Retrait du commandement</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Le Refus de l'Intégration Militaire
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Pour préserver l'indépendance de sa politique étrangère et son arsenal nucléaire naissant face à l'hégémonie américaine de la Guerre froide, la France quitte la structure militaire intégrée tout en restant membre du Traité politique.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Départ des troupes et bases de l'OTAN hors de France
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Souveraineté absolue de la décision d'engagement militaire
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Développement accéléré de la triade nucléaire française
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#10233F]/90 border border-blue-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                2009 – Président Nicolas Sarkozy
              </span>
              <span className="text-xs text-slate-400 font-mono">Réintégration pleine</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Le Retour dans les États-Majors Alliés
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Constatant que les troupes françaises participaient déjà à toutes les opérations de terrain sans peser sur les décisions au sommet, la France réintègre le commandement avec deux conditions intangibles : indépendance nucléaire et liberté d'appréciation.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Obtention de commandements stratégiques pour des officiers français
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Sanctuaire nucléaire totalement exclu du comité des plans nucléaires
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Capacité d'influencer la posture et les orientations européennes
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'capabilities' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#10233F]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <Plane className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">
                Aviation Omnirôle : Rafale
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Appareil de combat de pointe capable de missions d'interception, d'attaque au sol, de reconnaissance et de frappe nucléaire aéroportée.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-mono text-blue-300 font-semibold block">
              Projetable en 48 heures
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#10233F]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <Shield className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">
                Flanc Est : Mission Aigle
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bataillon multinational déployé en Roumanie sous commandement français avec chars Leclerc et systèmes de défense antiaérienne MAMBA.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-mono text-emerald-300 font-semibold block">
              Nation-cadre en Roumanie
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#10233F]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <Award className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">
                SNLE & Dissuasion Océanique
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Permanence à la mer continue depuis 1972 assurée par 4 sous-marins nucléaires lanceurs d'engins garantissant la liberté d'action de la France.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-mono text-amber-300 font-semibold block">
              Permanence opérationnelle continue
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

