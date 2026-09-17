import type { CnFunction } from 'cn';
import { createCn } from 'cn/config';

/*
   `spiko-text-*` and `spiko-heading-*` are custom `@utility` classes (see ./styles/global.css); each one is a full
   typography spec (family + size + weight + style + line height). tailwind-merge does not know them, so it kept
   every one it was handed and let stylesheet order pick the winner instead of call order: Tailwind v4 emits custom
   utilities *before* its own `text-*`/`leading-*` utilities and sorts them alphabetically, so a component default
   silently beat a caller's `spiko-heading-*` override.

   Declaring `spiko-heading-*` as superseding body text and the font/leading utilities makes those overrides win.
   The reverse is deliberately not declared and `spiko-text-*` only conflicts with itself, which means a raw
   `text-*`/`leading-*` in a component default still beats a caller's `spiko-text-*`. Components must therefore
   express their own typography with a `spiko-text-*`/`spiko-heading-*` class, never with raw `text-*`/`leading-*`,
   or callers cannot override it.
*/
export const cn: CnFunction = createCn({
  extend: {
    classGroups: {
      'spiko-heading': [(className: string) => className.startsWith('spiko-heading-')],
      'spiko-text': [(className: string) => className.startsWith('spiko-text-')],
    },
    conflictingClassGroups: {
      'spiko-heading': ['spiko-text', 'font-size', 'font-weight', 'font-family', 'font-style', 'leading'],
    },
  },
});
