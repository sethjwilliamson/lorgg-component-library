import NavigationSide from '@/lib-components/NavigationSide';
import NavigationTop from '@/lib-components/NavigationTop';
import './Navigation.css';

export default {
  title: 'Library/Navigation',
  component: [NavigationSide, NavigationTop],
  argTypes: {},
};

const Template = (args) => ({
  components: { NavigationSide, NavigationTop },
  setup() {
    return { args };
  },
  template: `<div class="navigation-template" > 
              <NavigationTop style="grid-area: navigationTop" v-bind="args" />
              <NavigationSide style="grid-area: navigationSide" v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: false,
  items: [
    {
      faIcon: 'fa-cards-blank',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Gallery',
    },
    {
      faIcon: 'hammer',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Builder',
    },
    {
      faIcon: 'books',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Library',
    },
    {
      faIcon: 'treasure-chest',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Manager',
    },
    {
      faIcon: 'ranking-star',
      highlighted: false,
      routerLocation: '/test',
      text: 'Leaderboard',
    },
    {
      faIcon: 'fa-chart-mixed',
      highlighted: false,
      routerLocation: '/test',
      text: 'Meta',
    },
    {
      faIcon: ['fak', 'chart-decks'],
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Stats',
    },
    {
      faIcon: ['fak', 'chart-cards'],
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Stats',
    },
  ],
};

export const DeckBuilderHighlighted = Template.bind({});
DeckBuilderHighlighted.args = {
  isLoggedIn: false,
  items: [
    {
      faIcon: 'fa-cards-blank',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Gallery',
    },
    {
      faIcon: 'hammer',
      highlighted: true,
      routerLocation: '/test',
      text: 'Deck Builder',
    },
    {
      faIcon: 'books',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Library',
    },
    {
      faIcon: 'treasure-chest',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Manager',
    },
    {
      faIcon: 'ranking-star',
      highlighted: false,
      routerLocation: '/test',
      text: 'Leaderboard',
    },
    {
      faIcon: 'fa-chart-mixed',
      highlighted: false,
      routerLocation: '/test',
      text: 'Meta',
    },
    {
      faIcon: ['fak', 'chart-decks-2'],
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Stats',
    },
    {
      faIcon: ['fak', 'chart-cards-2'],
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Stats',
    },
  ],
};

export const ChartIcons = Template.bind({});
ChartIcons.args = {
  isLoggedIn: false,
  items: [
    {
      faIcon: 'fa-cards-blank',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Gallery',
    },
    {
      faIcon: 'hammer',
      highlighted: true,
      routerLocation: '/test',
      text: 'Deck Builder',
    },
    {
      faIcon: 'books',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Library',
    },
    {
      faIcon: 'treasure-chest',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Manager',
    },
    {
      faIcon: 'ranking-star',
      highlighted: false,
      routerLocation: '/test',
      text: 'Leaderboard',
    },
    {
      faIcon: 'fa-chart-mixed',
      highlighted: false,
      routerLocation: '/test',
      text: 'Meta',
    },
    {
      faIcon: 'fa-chart-pie',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Stats',
    },
    {
      faIcon: 'fa-chart-simple-horizontal',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Stats',
    },
  ],
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
  name: 'SevTheDev',
  iconCard: '03MT037',
  bannerColor: '#ffffff',
  items: [
    {
      faIcon: 'fa-cards-blank',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Gallery',
    },
    {
      faIcon: 'hammer',
      highlighted: true,
      routerLocation: '/test',
      text: 'Deck Builder',
    },
    {
      faIcon: 'books',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Library',
    },
    {
      faIcon: 'treasure-chest',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Manager',
    },
    {
      faIcon: 'ranking-star',
      highlighted: false,
      routerLocation: '/test',
      text: 'Leaderboard',
    },
    {
      faIcon: 'fa-chart-mixed',
      highlighted: false,
      routerLocation: '/test',
      text: 'Meta',
    },
    {
      faIcon: 'fa-chart-pie',
      highlighted: false,
      routerLocation: '/test',
      text: 'Deck Stats',
    },
    {
      faIcon: 'fa-chart-simple-horizontal',
      highlighted: false,
      routerLocation: '/test',
      text: 'Card Stats',
    },
  ],
};
