import FilterKeywords from '@/lib-components/Filters/FilterKeywords';

export default {
  title: 'Library/Filters/FilterKeywords',
  component: FilterKeywords,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterKeywords },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterKeywords v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
