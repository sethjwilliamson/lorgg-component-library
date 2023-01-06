import DeckButtons from '@/lib-components/DeckButtons';

export default {
  title: 'Library/DeckButtons',
  component: DeckButtons,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckButtons },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckButtons v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  showButtons: {
    deleteDeck: true,
    updateDeckPrivacy: true,
    editDeckName: true,
    gemsCost: true,
    openArchetypePage: true,
    simulateMulligan: true,
    openInDeckBuilder: true,
    copyDeckCode: true,
    uploadDeckToLor: true,
    shareDeck: true,
  },
  deckId: 1,
};

export const NoDeckId = Template.bind({});
NoDeckId.args = {
  deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  showButtons: {
    deleteDeck: false,
    updateDeckPrivacy: false,
    editDeckName: false,
    gemsCost: true,
    openArchetypePage: true,
    simulateMulligan: true,
    openInDeckBuilder: true,
    copyDeckCode: true,
    uploadDeckToLor: true,
    shareDeck: true,
  },
  deckId: 1,
};

export const DeckPreview = Template.bind({});
DeckPreview.args = {
  deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  showButtons: {
    deleteDeck: false,
    updateDeckPrivacy: false,
    editDeckName: false,
    gemsCost: true,
    openArchetypePage: true,
    simulateMulligan: false,
    openInDeckBuilder: true,
    copyDeckCode: true,
    uploadDeckToLor: true,
    shareDeck: false,
  },
  deckId: 1,
};
