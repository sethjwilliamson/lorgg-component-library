export type ProfileChampionRowProps = {
  cardCode: string;
  matches: number;
  wins: number;
  index: number;
};

export const profileChampionRowProps = {
  cardCode: {
    type: String,
    required: true,
    default: '01IO001',
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
