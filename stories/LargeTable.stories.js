import LargeTable from '@/lib-components/LargeTable';

export default {
  title: 'Library/LargeTable',
  component: LargeTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { LargeTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <LargeTable v-bind="args" style="--table-grid-auto-rows: 50px;" >
                <div /><div>Test</div>
              </LargeTable>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  headingItems: [
    {
      title: 'Test',
      isShown: true,
      isSortable: true,
      sortDirection: 'sort-up',
    },
  ],
};
