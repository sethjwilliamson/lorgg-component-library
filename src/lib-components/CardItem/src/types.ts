import type { ComputedRef } from 'vue';

import type { Nullable, Optional } from '#/helpers';

export interface RouteItem {
  name?: string | symbol;
  path: string;
  meta: {
    breadcrumb?: string;
  };
}

export type CardItemPropRoute = Nullable<RouteItem[]>;

export interface CardItemProps {
  linkComponent: Nullable<string>;
  last: Nullable<string>;
  route: CardItemPropRoute;
}

export interface CardItemInstance {
  //   pushTo: (arg0: {
  //     name?: string | symbol;
  //     path?: string;
  //   }) => Optional<string | Record<'name', string | symbol>>;
  //   breadcrumbs: ComputedRef<RouteItem[]>;
  //   lastCrumb: ComputedRef<string>;
}
