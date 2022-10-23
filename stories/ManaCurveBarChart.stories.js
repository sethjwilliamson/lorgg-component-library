import ManaCurveChart from '@/lib-components/Charts/ManaCurveChart';

export default {
  title: 'Library/Charts/ManaCurveChart',
  component: ManaCurveChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { ManaCurveChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: var(--color-2); width: 320px;">
              <ManaCurveChart v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
};
