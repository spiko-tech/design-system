import * as React from 'react';
type TextareaProps = React.ComponentProps<'textarea'> & {
    label?: React.ReactNode;
    caption?: React.ReactNode;
    captionPosition?: 'top' | 'bottom';
};
declare const Textarea: ({ id, label, caption, captionPosition, className, "aria-describedby": ariaDescribedBy, ...props }: TextareaProps) => React.JSX.Element;
export { Textarea };
export type { TextareaProps };
