import { Lang } from './lang';

export type TranslatedData<T> = Partial<Record<Lang, T>>;
