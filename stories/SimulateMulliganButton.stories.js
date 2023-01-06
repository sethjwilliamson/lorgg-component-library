import SimulateMulliganButton from '@/lib-components/Buttons/SimulateMulliganButton';

export default {
  title: 'Library/SimulateMulliganButton',
  component: SimulateMulliganButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { SimulateMulliganButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <SimulateMulliganButton v-bind="args" />
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
