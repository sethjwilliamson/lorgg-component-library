import type { ComponentPublicInstance, UnwrapRef } from 'vue';

export type Nullable<T> = T | null;
export type Nillable<T> = T | null | undefined;
export type Optional<T> = T | undefined;
export type SFCWithInstall<R, T> = T & { install(app: R): void };
export type UnwrappedInstance<T> = Nullable<
  ComponentPublicInstance<UnwrapRef<T>>
>;

export type ObjectWithNumber = { [key: string]: number };

export type MultiSelectOption = {
  value: string;
  label: string;
};
