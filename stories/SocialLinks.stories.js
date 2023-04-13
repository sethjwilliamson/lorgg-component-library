import SocialLinks from '@/lib-components/SocialLinks';

export default {
  title: 'Library/SocialLinks',
  component: SocialLinks,
  argTypes: {},
};

const Template = (args) => ({
  components: { SocialLinks },
  setup() {
    return { args };
  },
  template: `<div > 
              <SocialLinks v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
