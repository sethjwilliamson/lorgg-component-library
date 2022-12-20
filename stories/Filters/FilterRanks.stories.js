import FilterRanks from '@/lib-components/Filters/FilterRanks';

export default {
  title: 'Library/Filters/FilterRanks',
  component: FilterRanks,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterRanks },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterRanks v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
