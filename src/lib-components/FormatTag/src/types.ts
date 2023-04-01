import { FormatEnum } from '#/jsons';
import { PropType } from 'vue';

export type FormatTagProps = {
  format: FormatEnum;
};

export const formatTagProps = {
  format: {
    type: String as PropType<FormatEnum>,
    required: true,
    default: 'client_Formats_Standard_name',
  },
};
