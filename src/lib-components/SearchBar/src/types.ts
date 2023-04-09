import { CardJsonCard } from '#/jsons';

export type SearchBarOptionPlayer = {
  type: 'player';
  cardCode?: string;
  color?: string;
  name: string;
  rank?: number;
  link: string;
};

export type SearchBarOptionCard = {
  type: 'card';
  card: CardJsonCard;
  link: string;
};

export type SearchBarOption = SearchBarOptionCard | SearchBarOptionPlayer;

export type SearchBarProps = {
  // value: string;
};

export const searchBarProps = {
  // value: {
  //   type: String,
  //   required: true,
  //   default: [],
  // },
};
