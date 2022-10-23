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
  template: `<div :style="{'background-color': 'var(--color-2)', width: args.width + 'px', height: args.height + 'px'}">
              <ManaCurveChart v-bind="args" :style="{height: args.height + 'px'}"/>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  paddingTop: 5,
  showDataLabels: true,
  dataLabelsOffset: -5,
  tooltipsEnabled: true,
  displayXScale: true,
  height: 140,
  width: 280,
};

export const DeckBuilder = Template.bind({});
DeckBuilder.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  paddingTop: 0,
  showDataLabels: false,
  dataLabelsOffset: 0,
  tooltipsEnabled: false,
  displayXScale: true,
  height: 94,
  width: 280,
};

export const DeckRow = Template.bind({});
DeckRow.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  paddingTop: 0,
  showDataLabels: false,
  dataLabelsOffset: 0,
  tooltipsEnabled: false,
  displayXScale: false,
  height: 30,
  width: 90,
};
