import GemsCost from '@/lib-components/GemsCost';

export default {
  title: 'Library/GemsCost',
  component: GemsCost,
  argTypes: {},
};

const Template = (args) => ({
  components: { GemsCost },
  setup() {
    return { args };
  },
  template: `<div > 
              <GemsCost v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deck: {
    '06BC015': 3,
    '06RU001': 3,
    '06MT047': 3,
    '06BC026': 3,
    '06BC021': 3,
  },
};
