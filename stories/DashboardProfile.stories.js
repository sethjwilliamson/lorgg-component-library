import { getDate } from '@/helpers/functions';
import DashboardProfile from '@/lib-components/DashboardProfile';

export default {
  title: 'Library/DashboardProfile',
  component: DashboardProfile,
  argTypes: {},
};

const Template = (args) => ({
  components: { DashboardProfile },
  setup() {
    return { args };
  },
  template: `<div style="width: 360px;"> 
              <DashboardProfile v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  bannerCardCode: null,
  bannerColor: '#ffffff',
  iconCardCode: null,
  name: 'SevTheDev',
  server: 'Americas',
  matches: 20,
  wins: 12,
  premiumExpiration: null,
  isPremiumRenewing: false,
};

export const PremiumRenewing = Template.bind({});
PremiumRenewing.args = {
  bannerCardCode: '03MT010',
  bannerColor: '#ffffff',
  iconCardCode: '03MT077',
  name: 'SevTheDev',
  server: 'Americas',
  matches: 20,
  wins: 12,
  premiumExpiration: getDate(10),
  isPremiumRenewing: true,
};

export const PremiumExpiring = Template.bind({});
PremiumExpiring.args = {
  bannerCardCode: '03MT010',
  bannerColor: '#ffffff',
  iconCardCode: '03MT049',
  name: 'SevTheDev',
  server: 'Americas',
  matches: 20,
  wins: 12,
  premiumExpiration: getDate(10),
  isPremiumRenewing: false,
};
