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
                <div />
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
              </LargeTable>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  headingItems: [
    {
      title: 'Test',
      id: 'test1',
      isShown: true,
      sortDirection: 'not-sortable',
    },
    {
      title: 'Test2',
      id: 'test2',
      isShown: true,
      sortDirection: 'sort-up',
    },
    {
      title: 'Test3',
      id: 'test3',
      isShown: true,
      sortDirection: 'sort-up',
    },
    {
      title: 'Test4',
      id: 'test4',
      isShown: true,
      sortDirection: 'sort-up',
    },
    {
      title: 'Test5',
      id: 'test5',
      isShown: true,
      sortDirection: 'sort-up',
    },
  ],
};
