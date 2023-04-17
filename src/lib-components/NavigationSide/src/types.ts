import { NavigationProps, navigationProps } from '@/types';

export type NavigationSideProps = NavigationProps & {
  expanded: boolean;
};

export const navigationSideProps = {
  ...navigationProps,
  expanded: {
    type: Boolean,
    required: false,
    default: false,
  },
};
