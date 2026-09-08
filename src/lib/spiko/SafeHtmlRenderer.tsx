import DOMPurify from 'dompurify';
import { ComponentProps, ElementType } from 'react';

export const SafeHtmlRenderer = <T extends ElementType>({
  dirtyString,
  className,
  as,
  ...props
}: { dirtyString: string; className?: string; as?: T } & Omit<
  ComponentProps<T>,
  'dangerouslySetInnerHTML' | 'children'
>) => {
  const Tag = as || ('div' as ElementType);
  const sanitizedString = DOMPurify.sanitize(dirtyString, { ADD_ATTR: ['target'] });

  return <Tag {...props} className={className} dangerouslySetInnerHTML={{ __html: sanitizedString }} />;
};
