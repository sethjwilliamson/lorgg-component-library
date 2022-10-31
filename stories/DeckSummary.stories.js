import { getDeckObjectFromCode } from '@/helpers/functions';
import DeckSummary from '@/lib-components/Deck/DeckSummary';

export default {
  title: 'Library/DeckSummary',
  component: DeckSummary,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckSummary },
  setup() {
    return { args };
  },
  data() {
    return {
      modelValue: args.modelValue,
    };
  },
  template: `<div>
              <DeckSummary v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deck: getDeckObjectFromCode(
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  ),
};
