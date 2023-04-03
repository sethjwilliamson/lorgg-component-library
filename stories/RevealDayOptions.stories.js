import { getDate } from '@/helpers/functions';
import RevealDayOptions from '@/lib-components/RevealDayOptions';

export default {
  title: 'Library/RevealDayOptions',
  component: RevealDayOptions,
  argTypes: {},
};

const Template = (args) => ({
  components: { RevealDayOptions },
  setup() {
    return { args };
  },
  data() {
    return {
      days: args.days,
    };
  },
  template: `<div > 
              <RevealDayOptions v-bind="args" v-model:days="days" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  days: [-5, -4, -3, -2, -1, 0, 1, 2, 3].map((x) => {
    return {
      activated: x === 0,
      date: getDate(x),
      soon: false,
    };
  }),
};

export const RevealSoon = Template.bind({});
RevealSoon.args = {
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => {
    return {
      activated: x === 1,
      date: getDate(x),
      soon: x === 1,
    };
  }),
};

export const RevealSoon2 = Template.bind({});
RevealSoon2.args = {
  days: [-3, -2, -1, 0.1, 1, 2, 3, 4, 5].map((x) => {
    return {
      activated: x === 0.1,
      date: getDate(x),
      soon: x === 0.1,
    };
  }),
};

export const RevealsDone = Template.bind({});
RevealsDone.args = {
  days: [-7, -6, -5, -4, -3, -2, -1].map((x) => {
    return {
      activated: x === -1,
      date: getDate(x),
      soon: false,
    };
  }),
};
