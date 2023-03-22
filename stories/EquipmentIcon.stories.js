import EquipmentIcon from '@/lib-components/icons/EquipmentIcon';

export default {
  title: 'Library/Icons/EquipmentIcon',
  component: EquipmentIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { EquipmentIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <EquipmentIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
