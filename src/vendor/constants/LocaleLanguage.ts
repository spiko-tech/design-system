import { Schema } from 'effect';

export const LocaleLanguage = Schema.Literal('en', 'es', 'fr', 'it', 'de', 'nl').annotations({
  description: 'The language of the user',
  identifier: 'LocaleLanguage',
  title: 'LocaleLanguage',
});
export type LocaleLanguage = typeof LocaleLanguage.Type;
