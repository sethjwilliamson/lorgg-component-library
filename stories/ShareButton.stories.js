import ShareButton from '@/lib-components/ShareButton';

export default {
  title: 'Library/ShareButton',
  component: ShareButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { ShareButton },
  setup() {
    return { args };
  },
  template: `<div >
              <ShareButton>
                {{ args.text }}
              </ShareButton>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Share',
};
