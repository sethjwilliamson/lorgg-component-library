import FilterSampleSize from '@/lib-components/Filters/FilterSampleSize';

export default {
  title: 'Library/Filters/FilterSampleSize',
  component: FilterSampleSize,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterSampleSize },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div style="width: 310px">
              <FilterSampleSize  v-model:filterArray="filterArray"/>
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
