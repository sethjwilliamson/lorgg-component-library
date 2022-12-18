import FilterServers from '@/lib-components/Filters/FilterServers';

export default {
  title: 'Library/Filters/FilterServers',
  component: FilterServers,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterServers },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterServers v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
