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
  ignoreCardItem: false,
  color: '#C45987',
  name: 'Yasuo',
  manaNumber: 4,
  quantityNumber: 1,
  maintainAspectRatio: true,
  showPlusMinus: false,
};

export const Leaderboard = Template.bind({});
Leaderboard.args = {
  cardCodeProp: '03MT037',
  ignoreCardItem: true,
  name: 'SevTheDev',
  manaNumber: 4,
  quantityNumber: 222,
  maintainAspectRatio: true,
  showPlusMinus: false,
};

export const DeckBuilder = Template.bind({});
DeckBuilder.args = {
  cardCodeProp: '01IO015',
  ignoreCardItem: false,
  color: '#C45987',
  name: 'Yasuo',
  manaNumber: 4,
  quantityNumber: 2,
  maintainAspectRatio: true,
  showPlusMinus: true,
};
