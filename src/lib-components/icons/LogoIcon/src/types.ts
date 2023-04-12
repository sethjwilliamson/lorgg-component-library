import { PropType } from 'vue';

export type LogoType = 'text-only' | 'logo-only' | 'logo-and-text';

export type LogoIconProps = {
  logoType: LogoType;
};

export const logoIconProps = {
  logoType: {
    type: String as PropType<LogoType>,
    required: true,
    default: 'logo-and-text',
  },
};
