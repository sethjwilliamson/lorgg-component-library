import AdvancedFilterItem from '@/lib-components/Filters/AdvancedFilterItem';

export default {
  title: 'Library/AdvancedFilterItem',
  component: AdvancedFilterItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { AdvancedFilterItem },
  setup() {
    return { args };
  },
  data() {
    return {
      filterValue: args.filterValue,
    };
  },
  template: `<div > 
              <AdvancedFilterItem v-bind="args" v-model:filterValue="filterValue"/>
              
              {{ JSON.stringify(filterValue) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterValue: {
    attribute: 'attack',
    equality: '>',
    number: 0,
  },
};
