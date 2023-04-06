export type DashboardLeaderboardRowProps = {
  name: string;
  id: number;
  rank: number;
  matches: number;
  lp: number;
  change?: number;
  index: number;
  selectedBannerCard?: string;
};

export const dashboardLeaderboardRowProps = {
  name: {
    type: String,
    required: true,
    default: '',
  },
  selectedBannerCard: {
    type: String,
    required: true,
    default: '',
  },
  rank: {
    type: Number,
    required: true,
    default: 0,
  },
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  matches: {
    type: Number,
    required: true,
    default: 0,
  },
  lp: {
    type: Number,
    required: true,
    default: 0,
  },
  change: {
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
