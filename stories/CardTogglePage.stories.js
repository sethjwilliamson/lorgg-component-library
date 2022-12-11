import { useJsonStore } from '@/helpers/stores';
import CardTogglePage from '@/lib-components/CardTogglePage';

export default {
  title: 'Library/CardTogglePage',
  component: CardTogglePage,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardTogglePage },
  setup() {
    return { args };
  },
  data() {
    return {
      selectedOption: args.selectedOption,
    };
  },
  template: `<div style="width: 100%; height: 45px;">
              <CardTogglePage v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  card: useJsonStore().jsons.cardJson[0],
  carouselCard: useJsonStore().jsons.cardJson[0],
};
