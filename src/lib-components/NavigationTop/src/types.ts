export type NavigationTopProps = {
  name?: string;
  isLoggedIn: boolean;
};

export const navigationTopProps = {
  name: {
    type: String,
    required: false,
  },
  isLoggedIn: {
    type: Boolean,
    required: true,
    default: false,
  },
};
