import React, { useState } from 'react';
import { EU_MEMBERS_27, EUMemberCountry } from '../data/graphData';
import { Landmark, Users, Flag, Star, Check } from 'lucide-react';

export const EUVisualizer: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'founding'>('all');
  const [selectedCountry, setSelectedCountry] = useState<EUMemberCountry>(
    EU_MEMBERS_27.find((c) => c.isFrance)!
  );

  const displayedMembers = filter === 'founding' 
    ? EU_MEMBERS_27.filter((c) => c.isFounding)
    : EU_MEMBERS_27;

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Landmark className="w-3.5 h-3.5" />
            Visualisation Institutionnelle de l'UE
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Les 27 États Membres de l'Union Européenne
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            La France, pionnière des 6 membres fondateurs de la CECA en 1951 au cœur d'une Union de 450 millions d'habitants.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-[#244B85] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tous les 27 pays
          </button>
          <button
            onClick={() => setFilter('founding')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'founding'
                ? 'bg-[#244B85] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            6 Membres Fondateurs (1951)
          </button>
        </div>
      </div>

      {/* Grid of Countries */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2.5 mb-8">
        {displayedMembers.map((member) => {
          const isSelected = selectedCountry.code === member.code;
          const isFrance = member.isFrance;

          return (
            <button
              key={member.code}
              onClick={() => setSelectedCountry(member)}
              className={`p-3 rounded-xl border text-center transition-all duration-300 relative group ${
                isFrance
                  ? isSelected
                    ? 'bg-[#244B85] border-blue-300 ring-2 ring-blue-400 shadow-lg scale-105'
                    : 'bg-[#244B85]/60 border-blue-400/80 hover:bg-[#244B85]'
                  : isSelected
                  ? 'bg-slate-700 border-white/40 ring-1 ring-white/50 scale-105'
                  : 'bg-[#10233F]/60 border-white/5 hover:border-white/20 hover:bg-[#10233F]'
              }`}
            >
              {isFrance && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-amber-400 text-slate-950 rounded-full text-[10px] flex items-center justify-center font-bold">
                  ★
                </span>
              )}
              <span className="text-base sm:text-lg font-mono font-bold block text-white">
                {member.code}
              </span>
              <span className="text-[11px] text-slate-300 truncate block mt-0.5 font-medium">
                {member.name}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {member.joined}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Country Details Card */}
      <div className="p-6 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl text-white font-mono shadow-md ${
              selectedCountry.isFrance
                ? 'bg-gradient-to-br from-[#244B85] to-[#D62839]'
                : 'bg-slate-800 border border-white/10'
            }`}
          >
            {selectedCountry.code}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold text-white">
                {selectedCountry.name}
              </h4>
              {selectedCountry.isFounding && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-300" />
                  Membre Fondateur
                </span>
              )}
              {selectedCountry.isFrance && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/40">
                  Pilier de l'UE
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Capitale : <strong className="text-white">{selectedCountry.capital}</strong> • Adhésion : <strong className="text-white">{selectedCountry.joined}</strong> • Population : <strong className="text-white">{selectedCountry.population}</strong>
            </p>
          </div>
        </div>

        {selectedCountry.isFrance ? (
          <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/30 text-xs text-slate-200 max-w-md">
            <span className="font-bold text-blue-300 block mb-1">
              Rôle Clé de la France dans l'UE
            </span>
            Initiatrice de la Déclaration Schuman (1950), siège officiel du Parlement européen à Strasbourg, et défenseure majeure de l'autonomie stratégique et énergétique européenne.
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 text-xs text-slate-300 max-w-sm">
            Partenaire au sein du marché unique européen garantissant la libre circulation des personnes, biens, services et capitaux.
          </div>
        )}
      </div>
    </div>
  );
};

