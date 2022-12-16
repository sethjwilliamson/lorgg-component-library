import FilterRegions from '@/lib-components/Filters/FilterRegions';

export default {
  title: 'Library/Filters/FilterRegions',
  component: FilterRegions,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterRegions },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div style="width: 310px">
              <FilterRegions  v-model:filterArray="filterArray"/>
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
