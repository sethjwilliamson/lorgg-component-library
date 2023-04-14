import LanguageSelection from '@/lib-components/LanguageSelection';

export default {
  title: 'Library/LanguageSelection',
  component: LanguageSelection,
  argTypes: {},
};

const Template = (args) => ({
  components: { LanguageSelection },
  setup() {
    return { args };
  },
  template: `<div > 
              <LanguageSelection v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
