import './GridTest.css';

export default {
  title: 'Library/GridTest',
  argTypes: {},
};

const Template = (args) => ({
  setup() {
    return { args };
  },

  template: `<div class="parent" style="height: 90vh">
  <div class="navigationSideBar"> </div>
  <div class="navigationTopBar"> </div>
  <div class="filterPane"> </div>
  <div class="title"> </div>
  <div class="content"> </div>
  <div class="sidebar"> </div>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};
