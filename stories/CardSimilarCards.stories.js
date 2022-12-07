import { useJsonStore } from '@/helpers/stores';
import CardSimilarCards from '@/lib-components/CardSimilarCards';

export default {
  title: 'Library/CardSimilarCards',
  component: CardSimilarCards,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardSimilarCards },
  setup() {
    return { args };
  },
  template: `<div style="display:flex">
              <CardSimilarCards v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  card: useJsonStore().jsons.cardJsonObject['03FR022'],
};
