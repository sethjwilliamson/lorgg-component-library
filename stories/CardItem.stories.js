import CardItem from '@/lib-components/CardItem';

export default {
  title: 'Library/CardItem',
  component: CardItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardItem },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px">
              <CardItem v-bind="args" />
            </div>`,
});

export const Yasuo = Template.bind({});
Yasuo.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
  userCardQuantity: {},
};

export const Keywords3 = Template.bind({});
Keywords3.args = {
  cardCodeProp: '03SI001',
  isRoot: true,
  userCardQuantity: {},
};

export const Default = Template.bind({});
Default.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
  userCardQuantity: {},
};

export const NotRoot = Template.bind({});
NotRoot.args = {
  cardCodeProp: '01IO015',
  isRoot: false,
  userCardQuantity: {},
};

export const NotLoggedIn = Template.bind({});
NotLoggedIn.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
};

export const DeckBuilder0 = Template.bind({});
DeckBuilder0.args = {
  cardCodeProp: '01IO015',
  deckList: { '01IO015': 0 },
  isDeckBuilder: true,
  isRoot: true,
};

export const DeckBuilder2 = Template.bind({});
DeckBuilder2.args = {
  cardCodeProp: '01IO015',
  deckList: { '01IO015': 2 },
  isDeckBuilder: true,
  isRoot: true,
};

export const DeckBuilder3 = Template.bind({});
DeckBuilder3.args = {
  cardCodeProp: '01IO015',
  deckList: { '01IO015': 3 },
  isDeckBuilder: true,
  isRoot: true,
};

export const DeckBuilder2LoggedIn = Template.bind({});
DeckBuilder2LoggedIn.args = {
  cardCodeProp: '01IO015',
  deckList: { '01IO015': 2 },
  isDeckBuilder: true,
  isRoot: true,
  userCardQuantity: { '01IO015': 2 },
};

export const Deck02 = Template.bind({});
Deck02.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
  quantityNeeded: 2,
  userCardQuantity: { '01IO015': 0 },
};

export const Deck12 = Template.bind({});
Deck12.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
  quantityNeeded: 2,
  userCardQuantity: { '01IO015': 1 },
};

export const Deck21 = Template.bind({});
Deck21.args = {
  cardCodeProp: '01IO015',
  isRoot: true,
  quantityNeeded: 1,
  userCardQuantity: { '01IO015': 2 },
};
