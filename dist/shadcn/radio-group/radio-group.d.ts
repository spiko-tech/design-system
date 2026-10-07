import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import * as React from 'react';
declare const RadioGroup: ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) => import('react/jsx-runtime').JSX.Element;
declare const RadioGroupItem: ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) => import('react/jsx-runtime').JSX.Element;
type RadioGroupCardProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    label: React.ReactNode;
    description?: React.ReactNode;
};
declare const RadioGroupCard: ({ label, description, className, ...props }: RadioGroupCardProps) => import('react/jsx-runtime').JSX.Element;
export { RadioGroup, RadioGroupCard, RadioGroupItem };
