import FilterSets from '@/lib-components/FilterSets';

export default {
  title: 'Library/FilterSets',
  component: FilterSets,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterSets },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterSets v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
