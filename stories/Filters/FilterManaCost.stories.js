import FilterManaCost from '@/lib-components/Filters/FilterManaCost';

export default {
  title: 'Library/Filters/FilterManaCost',
  component: FilterManaCost,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterManaCost },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div style="width: 310px">
              <FilterManaCost  v-model:filterArray="filterArray"/>
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
