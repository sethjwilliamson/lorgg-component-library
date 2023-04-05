import SmallTable from '@/lib-components/SmallTable';

export default {
  title: 'Library/SmallTable',
  component: SmallTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { SmallTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <SmallTable v-bind="args" style="--table-grid-auto-rows: 50px; --table-grid-template-columns: repeat(5, 1fr)" >
                <div class="column-content" />
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
                <div class="column-content">Test</div>
              </SmallTable>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  headingItems: [
    {
      title: 'Test',
      id: 'test1',
    },
    {
      title: 'Test2',
      id: 'test2',
    },
    {
      title: 'Test3',
      id: 'test3',
    },
    {
      title: 'Test4',
      id: 'test4',
    },
    {
      title: 'Test5',
      id: 'test5',
    },
  ],
};
