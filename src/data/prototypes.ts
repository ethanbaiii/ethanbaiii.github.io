import editorial from './editorial.json';
export const prototypeGroups = [
  { id: 'digital', title: 'Digital Prototypes', items: editorial.prototypes.filter(item => ['anchor-boat', 'tower-trade-off', 'spatial-flip-puzzle'].includes(item.id)) },
  { id: 'tabletop', title: 'Tabletop', items: editorial.prototypes.filter(item => ['god-of-words', 'sprawl'].includes(item.id)) },
  { id: 'recreation', title: 'Recreation', items: editorial.prototypes.filter(item => item.id === 'tapper-recreate') },
];
