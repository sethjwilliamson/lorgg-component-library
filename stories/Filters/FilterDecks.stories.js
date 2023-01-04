import FilterDecks from '@/lib-components/Filters/FilterDecks';

export default {
  title: 'Library/Filters/FilterDecks',
  component: FilterDecks,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterDecks },
  setup() {
    return { args };
  },
  data() {
    return {
      filters: args.filters,
    };
  },
  template: `<div > 
              <FilterDecks v-bind="args" v-model:filters="filters" />
              
              {{ JSON.stringify(filters) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filters: {
    cardFilters: [],
    regionFilters: [],
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};
