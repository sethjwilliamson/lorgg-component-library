export type ProfileArchetypeRowProps = {
  archetypeId: number;
  deckCode: string;
  matches: number;
  wins: number;
  index: number;
};

export const profileArchetypeRowProps = {
  archetypeId: {
    type: Number,
    required: true,
    default: 0,
  },
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  matches: {
    type: Number,
    required: true,
    default: 0,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  index: {
    type: Number,
    required: true,
    default: 0,
  },
};
