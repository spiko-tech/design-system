'use client';

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import * as React from 'react';
import { cn } from '../../../utils.js';
import { Icon } from '../../spiko/Icon/Icon.js';
import { Button } from './button.js';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
// oxlint-disable-next-line spiko/no-single-use-type
type CarouselOptions = UseCarouselParameters[0];
// oxlint-disable-next-line spiko/no-single-use-type
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

// oxlint-disable-next-line spiko/no-single-use-type
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

const useCarouselSnapState = (): { totalSnapCount: number | null; currentSnapIndex: number } => {
  const { api } = useCarousel();
  const [currentSnapIndex, setCurrentSnapIndex] = React.useState(0);
  const [totalSnapCount, setTotalSnapCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCurrentSnapIndex(api.selectedScrollSnap());
      setTotalSnapCount(api.scrollSnapList().length);
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);
    api.on('resize', updateState);

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
      api.off('resize', updateState);
    };
  }, [api]);

  return { totalSnapCount, currentSnapIndex };
};

const Carousel = ({
  ref,
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = 'Carousel';

const CarouselContent = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  );
};
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
      {...props}
    />
  );
};
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = ({
  ref,
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { ref?: React.Ref<HTMLButtonElement> }) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  const { totalSnapCount } = useCarouselSnapState();

  if (totalSnapCount === null || totalSnapCount <= 1) return null;

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn('size-9 rounded-md', className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon.ChevronLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = ({
  ref,
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { ref?: React.Ref<HTMLButtonElement> }) => {
  const { scrollNext, canScrollNext } = useCarousel();
  const { totalSnapCount } = useCarouselSnapState();

  if (totalSnapCount === null || totalSnapCount <= 1) return null;

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn('size-9 rounded-md', className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon.ChevronRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};
CarouselNext.displayName = 'CarouselNext';

const CarouselIndicator = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => {
  const { api } = useCarousel();
  const { totalSnapCount, currentSnapIndex } = useCarouselSnapState();

  // Don't show indicator if there's only one snap position (all slides visible)
  if (totalSnapCount === null || totalSnapCount <= 1) return null;

  return (
    <div ref={ref} className={cn('mt-6 flex items-center justify-center gap-1', className)} {...props}>
      {Array.from({ length: totalSnapCount }, (_, index) => (
        <button
          disabled={index === currentSnapIndex}
          onClick={() => api?.scrollTo(index)}
          key={index}
          className={cn(
            'transition-all duration-200',
            index === currentSnapIndex
              ? 'h-2 w-[18px] rounded-full bg-primary' // Active indicator (rounded rectangle)
              : 'size-2 cursor-pointer rounded-full bg-border hover:mx-0.5 hover:scale-140' // Inactive indicator (circle)
          )}
        />
      ))}
    </div>
  );
};
CarouselIndicator.displayName = 'CarouselIndicator';

export { Carousel, CarouselContent, CarouselIndicator, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi };
