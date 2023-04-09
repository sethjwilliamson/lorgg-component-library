import SearchBar from '@/lib-components/SearchBar';

export default {
  title: 'Library/SearchBar',
  component: SearchBar,
  argTypes: {},
};

const Template = (args) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  data() {
    return {
      // value: args.value,
    };
  },
  template: `<div > 
              <SearchBar v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  // value: '',
};
