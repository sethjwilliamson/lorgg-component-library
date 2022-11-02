import SocialMediaLinks from '@/lib-components/SocialMediaLinks';

export default {
  title: 'Library/Charts/SocialMediaLinks',
  component: SocialMediaLinks,
};

const Template = (args) => ({
  components: { SocialMediaLinks },
  setup() {
    return { args };
  },
  template: `<div >
              <SocialMediaLinks v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});

Default.args = {};
