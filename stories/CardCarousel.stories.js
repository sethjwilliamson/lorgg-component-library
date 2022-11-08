import CardCarousel from '@/lib-components/CardCarousel';

export default {
  title: 'Library/CardCarousel',
  component: CardCarousel,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardCarousel },
  setup() {
    console.log(args.cardCodes);
    return { args };
  },
  template: `<div > 
              <CardCarousel v-bind="args" />
              {{ args.cardCodes.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: ['01IO001', '01DE001', '01FR001', '01PZ001'],
};
