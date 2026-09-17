import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent } from '@/shadcn/card/card.js';
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shadcn/carousel/carousel.js';

const meta = {
  title: 'Data/Carousel',
  component: Carousel,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }, (_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-center gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselIndicator />
      </Carousel>
    </div>
  ),
};
