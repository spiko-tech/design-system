import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import * as React from 'react';
declare const RadioGroup: ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) => React.JSX.Element;
declare const RadioGroupItem: ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) => React.JSX.Element;
type RadioGroupCardProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    label: React.ReactNode;
    description?: React.ReactNode;
};
declare const RadioGroupCard: ({ label, description, className, ...props }: RadioGroupCardProps) => React.JSX.Element;
export { RadioGroup, RadioGroupCard, RadioGroupItem };
