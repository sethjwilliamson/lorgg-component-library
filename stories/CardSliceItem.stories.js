import CardSliceItem from '@/lib-components/CardSliceItem';

export default {
  title: 'Library/CardSliceItem',
  component: CardSliceItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardSliceItem },
  setup() {
    return { args };
  },

  template: `<div style="width: 300px">
              <CardSliceItem v-bind="args" />
            </div>`,
});

export const Yasuo = Template.bind({});
Yasuo.args = {
  cardCodeProp: '01IO015',
  color: 'var(--color-Ionia-rgb)',
  ignoreCardItem: false,
  maintainAspectRatio: true,
  manaNumber: 4,
  name: 'Yasuo',
  quantityNumber: 1,
  showPlusMinus: false,
};

export const Leaderboard = Template.bind({});
Leaderboard.args = {
  cardCodeProp: '03MT037',
  ignoreCardItem: true,
  maintainAspectRatio: true,
  manaNumber: 4,
  name: 'SevTheDev',
  quantityNumber: 222,
  showPlusMinus: false,
};

export const DeckBuilder = Template.bind({});
DeckBuilder.args = {
  cardCodeProp: '01IO015',
  color: 'var(--color-Ionia-rgb)',
  ignoreCardItem: false,
  maintainAspectRatio: true,
  manaNumber: 4,
  name: 'Yasuo',
  quantityNumber: 2,
  showPlusMinus: true,
};

export const NoQuantity = Template.bind({});
NoQuantity.args = {
  cardCodeProp: '01IO015',
  color: 'var(--color-Ionia-rgb)',
  ignoreCardItem: false,
  maintainAspectRatio: true,
  manaNumber: 4,
  name: 'Yasuo',
  showPlusMinus: false,
};

export const NoValues = Template.bind({});
NoValues.args = {
  manaNumber: 4,
  name: 'Yasuo',
};
