import { default as useEmblaCarousel, UseEmblaCarouselType } from 'embla-carousel-react';
import { Button } from '../button/button.js';
import * as React from 'react';
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: {
    ({ ref, orientation, opts, setApi, plugins, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & CarouselProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const CarouselContent: {
    ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const CarouselItem: {
    ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const CarouselPrevious: {
    ({ ref, className, variant, size, ...props }: React.ComponentProps<typeof Button> & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
declare const CarouselNext: {
    ({ ref, className, variant, size, ...props }: React.ComponentProps<typeof Button> & {
        ref?: React.Ref<HTMLButtonElement>;
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
declare const CarouselIndicator: {
    ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement>;
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
export { Carousel, CarouselContent, CarouselIndicator, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi };
