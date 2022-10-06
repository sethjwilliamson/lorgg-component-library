import Image from '@tiptap/extension-image';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import ResizableImageTemplateVue from '../ResizableImageTemplate.vue';

export default Image.extend({
  name: 'ResizeableImage',
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        renderHTML: (attributes) => {
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: null,
        renderHTML(attributes) {
          return {
            height: attributes.height,
          };
        },
      },
    };
  },
  addNodeView() {
    return VueNodeViewRenderer(ResizableImageTemplateVue);
  },
});
