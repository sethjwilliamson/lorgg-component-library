import { getCardsFromDeck, getDeckObjectFromCode } from '@/helpers/functions';
import DeckBuilderSummary from '@/lib-components/DeckBuilderSummary';
import { getDeckFromCode } from 'lor-deckcodes-ts';

export default {
  title: 'Library/DeckBuilderSummary',
  component: DeckBuilderSummary,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckBuilderSummary },
  setup() {
    return { args };
  },
  template: `<div style="width:320px" > 
              <DeckBuilderSummary v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
let deck = getDeckObjectFromCode('CIDACAQDAMAQKBQBAEDAMHQBAYBSSBABAMBAYKBXAQBAMFQ2EY5ACAICAYUAEAIBAMMQCBADAM');
Default.args = {
  cards: getCardsFromDeck(deck),
  deck
};

export const DeckLimitChampionLimit = Template.bind({});
deck = getDeckObjectFromCode('CICQCAQDAMAQKBQBAIDAGDBJAMAQGDBIG4BQEBQWDI5AEAIBAMBAEAQGEYUAIAICAYKACBADAMAQMBQ6AIAQGGJR');
DeckLimitChampionLimit.args = {
  cards: getCardsFromDeck(deck),
  deck
};

export const DeckUnderLimit = Template.bind({});
deck = getDeckObjectFromCode('CICQCAQDAMAQKBQBAEDAGKIDAEBQYKBXAMBAMFQ2HIBACAIDAIBAEBRGFABQCBADAMAQMBQ6AIAQGGJR');
DeckUnderLimit.args = {
  cards: getCardsFromDeck(deck),
  deck
};

export const ChampionLimit = Template.bind({});
deck = getDeckObjectFromCode('CICQCAQDAMAQKBQBAIDAGDBJAMAQGDBIG4BQEBQWDI5AEAIBAMBAEAQGEYUAGAIEAMBQCBQGDYBACAYZGE');
ChampionLimit.args = {
  cards: getCardsFromDeck(deck),
  deck
};
