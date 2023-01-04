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
  filterCallback: (x) => {
    return true;
  },
  mode: 'tags',
};

export const Array = Template.bind({});
Array.args = {
  cardCodes: [],
  filterCallback: (x) => {
    return ['01IO001', '01IO002', '01IO003', '01IO004'].includes(x.cardCode);
  },
  mode: 'single',
};

export const Collectible = Template.bind({});
Collectible.args = {
  cardCodes: [],
  filterCallback: (x) => {
    return x.collectible;
  },
  mode: 'tags',
};
