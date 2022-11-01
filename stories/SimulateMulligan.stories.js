import { getDeckObjectFromCode } from '@/helpers/functions';
import SimulateMulligan from '@/lib-components/Deck/SimulateMulligan';

export default {
  title: 'Library/SimulateMulligan',
  component: SimulateMulligan,
  argTypes: {},
};

const Template = (args) => ({
  components: { SimulateMulligan },
  setup() {
    return { args };
  },
  template: `<div>
              <SimulateMulligan v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deck: getDeckObjectFromCode(
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
  ),
};
