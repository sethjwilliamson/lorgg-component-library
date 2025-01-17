import FilterCards from '@/lib-components/Filters/FilterCards';

export default {
  title: 'Library/Filters/FilterCards',
  component: FilterCards,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterCards },
  setup() {
    return { args };
  },
  data() {
    return {
      filters: args.filters,
    };
  },
  template: `<div > 
              <FilterCards v-bind="args" v-model:filters="filters" />
              
              {{ JSON.stringify(filters) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filters: {
    advancedFilters: [],
    regionFilters: [],
    manaCostFilters: [],
    typeFilters: [],
    rarityFilters: [],
    setFilters: [],
    keywordFilters: [],
  },
};
