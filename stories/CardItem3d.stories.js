import CardItem3d from '@/lib-components/CardItem3d';

export default {
  title: 'Library/CardItem3d',
  component: CardItem3d,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardItem3d },
  setup() {
    return { args };
  },
  template: `<div > 
              <CardItem3d v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  flipped: true,
};
