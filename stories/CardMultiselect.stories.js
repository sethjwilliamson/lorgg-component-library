import CardMultiselect from '@/lib-components/CardMultiselect';

export default {
  title: 'Library/CardMultiselect',
  component: CardMultiselect,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardMultiselect },
  setup() {
    return { args };
  },
  data() {
    return {
      cardCodes: args.cardCodes,
    };
  },
  template: `<div > 
              <CardMultiselect v-bind="args" v-model:cardCodes="cardCodes" />
              {{ cardCodes.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: [],
  onlyCollectible: false,
  mode: 'tags',
};
