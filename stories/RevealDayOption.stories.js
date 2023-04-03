import RevealDayOption from '@/lib-components/RevealDayOption';

export default {
  title: 'Library/RevealDayOption',
  component: RevealDayOption,
  argTypes: {},
};

const Template = (args) => ({
  components: { RevealDayOption },
  setup() {
    return { args };
  },
  template: `<div > 
              <RevealDayOption v-bind="args" />
            </div>`,
});

export const Past = Template.bind({});
Past.args = {
  date: new Date('2023-01-01'),
  activated: false,
};

export const ActivatedPast = Template.bind({});
ActivatedPast.args = {
  date: new Date('2023-01-01'),
  activated: true,
};

export const Future = Template.bind({});
Future.args = {
  date: new Date('2100-01-01'),
  activated: false,
};

export const ActivatedFuture = Template.bind({});
ActivatedFuture.args = {
  date: new Date('2100-01-01'),
  activated: true,
};
