export type OpenArchetypePageButtonProps = {
  archetypeId: number;
};

export const openArchetypePageButtonProps = {
  archetypeId: {
    type: Number,
    required: true,
    default: 0,
  },
};
