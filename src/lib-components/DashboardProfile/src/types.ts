import { PropType } from 'vue';

export type DashboardProfileProps = {
  bannerCardCode: string | null;
  bannerColor: string;
  iconCardCode: string | null;
  name: string;
  server: string;
  matches: number;
  wins: number;
  premiumExpiration: Date | null;
  isPremiumRenewing: boolean;
};

export const dashboardProfileProps = {
  bannerCardCode: {
    type: String as PropType<string | null>,
    required: true,
    default: '',
  },
  bannerColor: {
    type: String,
    required: true,
    default: '',
  },
  iconCardCode: {
    type: String as PropType<string | null>,
    required: true,
    default: '',
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  server: {
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
  premiumExpiration: {
    type: Date as PropType<Date | null>,
    required: true,
    default: null,
  },
  isPremiumRenewing: {
    type: Boolean,
    required: true,
    default: false,
  },
};
