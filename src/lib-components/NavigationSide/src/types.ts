import { PropType } from 'vue';

export type SideNavigationItem = {
  faIcon: string;
  highlighted: boolean;
  routerLocation: string;
  text: string;
};

export type LoggedInNavigationSideProps = {
  isLoggedIn: true;
  name: string;
  iconCard?: string;
  bannerColor?: string;
  userId: number;
};

export type LoggedOutNavigationSideProps = {
  isLoggedIn: false;
};

export type NavigationSideProps = (
  | LoggedInNavigationSideProps
  | LoggedOutNavigationSideProps
) & {
  items: SideNavigationItem[];
};

export const navigationSideProps = {
  items: {
    type: Array as PropType<SideNavigationItem[]>,
    required: true,
    default: [],
  },
  isLoggedIn: {
    type: Boolean as PropType<true | false>,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
  iconCard: {
    type: String,
    required: false,
    default: '',
  },
  bannerColor: {
    type: String,
    required: false,
    default: '',
  },
  userId: {
    type: Number,
    required: false,
    default: 1,
  },
};
