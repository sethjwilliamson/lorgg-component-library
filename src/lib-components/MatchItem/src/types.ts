export type MatchItemProps = {
  deckCode: string;
  gameMode: string;
  gameType: string;
  isAttackingFirst: boolean;
  isVictory: boolean;
  opponentDeckCode: string;
  opponentName: string;
  playedAt: Date;
};

export const matchItemProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  gameMode: {
    type: String,
    required: true,
    default: '',
  },
  gameType: {
    type: String,
    required: true,
    default: '',
  },
  isAttackingFirst: {
    type: Boolean,
    required: true,
    default: true,
  },
  isVictory: {
    type: Boolean,
    required: true,
    default: '',
  },
  opponentDeckCode: {
    type: String,
    required: true,
    default: '',
  },
  opponentName: {
    type: String,
    required: true,
    default: '',
  },
  playedAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
};
