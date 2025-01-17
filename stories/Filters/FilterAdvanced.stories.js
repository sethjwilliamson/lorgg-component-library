import FilterAdvanced from '@/lib-components/Filters/FilterAdvanced';

export default {
  title: 'Library/Filters/FilterAdvanced',
  component: FilterAdvanced,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterAdvanced },
  setup() {
    return { args };
  },
  data() {
    return {
      filterValue: args.filterValue,
    };
  },
  template: `<div > 
              <FilterAdvanced v-bind="args" v-model:filterValue="filterValue" />

              {{ JSON.stringify(filterValue) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterValue: [],
};
