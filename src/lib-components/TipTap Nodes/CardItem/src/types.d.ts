import { Node } from '@tiptap/core';
export interface CardItemOptions {
  cardCode: string;
}
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    cardItem: {
      /**
       * Add a Card Item
       */
      setCardItem: (options: CardItemOptions) => ReturnType;
    };
  }
}
// export declare const inputRegex: RegExp;
export declare const CardItem: Node<CardItemOptions, any>;
