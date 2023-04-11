import { PropType } from 'vue';

export type DashboardNewCardsProps = {
  cardCodes: string[];
};

export const dashboardNewCardsProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
