import React, { useState } from 'react';
import { UN_P5_MEMBERS, UNP5Member } from '../data/graphData';
import { Globe2, ShieldAlert, Award, FileCheck, CheckCircle } from 'lucide-react';

export const UNVisualizer: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<UNP5Member>(
    UN_P5_MEMBERS.find((m) => m.isFrance)!
  );

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
          <Globe2 className="w-3.5 h-3.5" />
          Conseil de Sécurité de l'ONU
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          Les Cinq Membres Permanents (P5) & Le Droit de Veto
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          La France dispose d'un siège permanent et d'un droit de veto aux côtés de quatre autres nations pour veiller à la paix et à la sécurité internationales.
        </p>
      </div>

      {/* P5 Interactive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
        {UN_P5_MEMBERS.map((member) => {
          const isSelected = selectedMember.code === member.code;
          const isFrance = member.isFrance;

          return (
            <button
              key={member.code}
              onClick={() => setSelectedMember(member)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                isFrance
                  ? isSelected
                    ? 'bg-[#244B85]/60 border-blue-400 ring-2 ring-blue-400/50 shadow-xl scale-102'
                    : 'bg-[#244B85]/30 border-blue-400/50 hover:bg-[#244B85]/50'
                  : isSelected
                  ? 'bg-slate-800 border-white/30 ring-1 ring-white/40 scale-102'
                  : 'bg-[#10233F]/40 border-white/5 hover:border-white/20 hover:bg-[#10233F]'
              }`}
            >
              {isFrance && (
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold text-[10px] tracking-wider uppercase">
                  France
                </span>
              )}
              <div className="text-3xl mb-2">{member.flag}</div>
              <h4 className="text-base font-bold text-white mb-0.5">
                {member.name}
              </h4>
              <span className="text-[11px] text-slate-400 block font-mono">
                {member.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Member Information & Veto Explanation */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedMember.flag}</span>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedMember.name}
                </h4>
                <p className="text-xs text-blue-300 font-semibold tracking-wide uppercase mt-0.5">
                  {selectedMember.status} au Conseil de Sécurité
                </p>
              </div>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
              {selectedMember.keyRole}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 max-w-xs shrink-0">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              Doctrine du Droit de Veto
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedMember.vetoDoctrine}
            </p>
          </div>
        </div>

        {/* French Leadership Highlights at UN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Défense du Droit International
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Refus d'ingérence unilatérale et attachement au consensus multilatéral de la Charte de l'ONU.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Accord de Paris (COP21)
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Succès historique de la diplomatie française unissant 196 délégations pour le climat planétaire.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Casques Bleus & Maintien de la Paix
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Soutien logistique et déploiements militaires d'interposition sur les théâtres de crise sensibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

