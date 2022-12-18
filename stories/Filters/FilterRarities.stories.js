import FilterRarities from '@/lib-components/Filters/FilterRarities';

export default {
  title: 'Library/Filters/FilterRarities',
  component: FilterRarities,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterRarities },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterRarities v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
