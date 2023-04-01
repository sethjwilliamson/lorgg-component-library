import RevealCarousel from '@/lib-components/RevealCarousel';

export default {
  title: 'Library/RevealCarousel',
  component: RevealCarousel,
  argTypes: {},
};

const Template = (args) => ({
  components: { RevealCarousel },
  setup() {
    console.log(args.cardCodes);
    return { args };
  },
  template: `<div > 
              <RevealCarousel v-bind="args" />
              {{ args.cardCodes.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: [
    '07PZ009',
    '07PZ017',
    '07NX009',
    '07NX008',
    '07NX014',
    '07NX007',
    '07NX007T8',
    '07NX007T6',
    '07NX007T5',
    '07NX007T2',
    '07NX007T1',
    '07NX006',
    '07NX015',
    '07NX003',
    '07NX004',
    '07NX001',
    '07NX001T1',
    '07NX001T2',
  ],
};
