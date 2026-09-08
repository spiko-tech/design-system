import { cn } from '@spiko/ui/utils';
import { Button } from '../shadcn/ui/button.js';

export const ExternalLink = ({
  children,
  href,
  newTab = true,
  className,
}: {
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
  className?: string;
}) => {
  return (
    <Button
      type="button"
      variant="externalLink"
      onClick={() => {
        if (newTab) {
          window.open(href, '_blank');
        } else {
          window.location.href = href;
        }
      }}
      className={cn('p-0 text-base underline hover:no-underline', className)}
    >
      {children}
    </Button>
  );
};
