import InfoDoughnutChart from '@/lib-components/Charts/InfoDoughnutChart';

export default {
  title: 'Library/Charts/InfoDoughnutChart',
  component: InfoDoughnutChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { InfoDoughnutChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: black">
              <InfoDoughnutChart v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  info: 'typeRef',
};

export const Rarity = Template.bind({});
Rarity.args = {
  deckCode:
    'CUFACAIEGYAQEBR4AEBQKBQBAQEQ2AIFAEDACBQCAMAQMAYMAEDAYAQCAIBQGBADAEBQEDBIAAAQCAIDFY',
  info: 'rarityRef',
};
