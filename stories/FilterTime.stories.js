import FilterTime from '@/lib-components/Filters/FilterTime';

export default {
  title: 'Library/Filters/FilterTime',
  component: FilterTime,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterTime },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div>
              <FilterTime  v-model:filterArray="filterArray"/>
              {{ JSON.stringify(filterArray) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
