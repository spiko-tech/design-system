import { cn } from '@spiko/ui/utils';

export const DistributorLogo = ({
  distributorLogoUrl,
  className,
}: {
  distributorLogoUrl: string;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <img
        src={distributorLogoUrl}
        alt="Distributor"
        className="mr-auto h-8 object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
