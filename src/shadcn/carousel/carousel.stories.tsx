import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel/carousel.js';

const meta: Meta<typeof Carousel> = { component: Carousel, title: 'UI/Carousel', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3].map((slide) => (
          <CarouselItem key={slide}>
            <div className="flex aspect-square items-center justify-center rounded-md border p-6 text-4xl font-semibold">
              {slide}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex items-center justify-center gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselIndicator />
    </Carousel>
  ),
};
