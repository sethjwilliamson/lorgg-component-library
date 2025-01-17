import FilterTypes from '@/lib-components/Filters/FilterTypes';

export default {
  title: 'Library/Filters/FilterTypes',
  component: FilterTypes,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterTypes },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterTypes v-bind="args" v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
