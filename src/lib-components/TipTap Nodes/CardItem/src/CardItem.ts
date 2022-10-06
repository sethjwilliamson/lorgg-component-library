import { Extension, NodeView, VueNodeViewRenderer } from '@tiptap/vue-3';
import CardItemTipTapTemplateVue from '../CardItemTipTapTemplate.vue';
import { mergeAttributes, Node } from '@tiptap/core';

export default Node.create({
  name: 'CardItem',
  group: 'block',
  atom: true,
  addAttributes() {
    return {
      cardCode: {
        default: '01IO005',
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'tiptap-card-item',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['tiptap-card-item', mergeAttributes(HTMLAttributes)];
  },
  addCommands() {
    return {
      setCardItem:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
  addNodeView() {
    return VueNodeViewRenderer(CardItemTipTapTemplateVue);
  },
});
