import LogoIcon from '@/lib-components/icons/LogoIcon';

export default {
  title: 'Library/LogoIcon',
  component: LogoIcon,
  argTypes: {
    logoType: {
      control: 'select',
      options: ['text-only', 'logo-only', 'logo-and-text'],
    },
  },
};

const Template = (args) => ({
  components: { LogoIcon },
  setup() {
    return { args };
  },
  template: `<div > 
              <LogoIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  logoType: 'text-only',
};
