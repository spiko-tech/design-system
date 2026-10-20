import { cn } from '@/utils.js';
import * as React from 'react';
import { Label } from '../label/label.js';

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: React.ReactNode;
  caption?: React.ReactNode;
  captionPosition?: 'top' | 'bottom';
};

const Textarea = ({
  id,
  label,
  caption,
  captionPosition = 'top',
  className,
  'aria-describedby': ariaDescribedBy,
  ...props
}: TextareaProps) => {
  const generatedId = React.useId();
  const textareaId = id ?? generatedId;
  const captionId = `${textareaId}-caption`;

  const captionElement = caption && (
    <p id={captionId} data-slot="textarea-caption" className="spiko-text-sm-regular text-text-secondary">
      {caption}
    </p>
  );

  return (
    <div data-slot="textarea-field" className="flex w-full flex-col gap-1.5">
      {label && (
        <Label htmlFor={textareaId} className="leading-5 text-text">
          {label}
        </Label>
      )}
      {captionPosition === 'top' && captionElement}
      <textarea
        id={textareaId}
        data-slot="textarea"
        aria-describedby={[caption && captionId, ariaDescribedBy].filter(Boolean).join(' ') || undefined}
        className={cn(
          'focus-visible:shadow-xs flex field-sizing-content min-h-15 w-full rounded-md border border-border bg-transparent px-3 py-2 spiko-text-base-regular text-text transition-[color,box-shadow] outline-none placeholder:text-text-secondary focus-visible:border-information disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:spiko-text-sm-regular dark:bg-input/30',
          className
        )}
        {...props}
      />
      {captionPosition === 'bottom' && captionElement}
    </div>
  );
};

export { Textarea };
export type { TextareaProps };
