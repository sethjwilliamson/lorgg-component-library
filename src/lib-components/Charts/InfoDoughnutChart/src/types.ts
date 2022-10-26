import { PropType } from 'vue';

type Info = 'typeRef' | 'rarityRef';

export type InfoDoughtnutChartData = {
  key: string;
  value: number;
  color: string;
  name: string;
  order: number;
};

export type InfoDoughtnutChartProps = {
  deckCode: string;
  info: Info;
};

export const infoDoughtnutChartProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  info: {
    type: String as PropType<Info>,
    required: true,
    default: 'typeRef',
  },
};
