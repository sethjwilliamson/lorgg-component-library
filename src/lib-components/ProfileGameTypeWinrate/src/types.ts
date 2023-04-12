export type ProfileGameTypeWinrateProps = {
  gameType: string;
  matches: number;
  wins: number;
};

export const profileGameTypeWinrateProps = {
  gameType: {
    type: String,
    required: true,
    default: '',
  },
  matches: {
    type: Number,
    required: true,
    default: 1,
  },
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
};
