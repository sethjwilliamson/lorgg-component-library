import FilterCardCodes from '@/lib-components/Filters/FilterCardCodes';

export default {
  title: 'Library/Filters/FilterCardCodes',
  component: FilterCardCodes,
  argTypes: {},
};

const Template = (args) => ({
  components: { FilterCardCodes },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div > 
              <FilterCardCodes v-model:filterArray="filterArray" />
              {{ filterArray.toString() }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
};
