import { ReactNode } from 'react';
import { Control, Controller, FieldPath, FieldValues, Path } from 'react-hook-form';
import { Tabs } from '../shadcn/ui/tabs.js';
import { InputProps } from './InputProps.js';

export const ControlledTabs = <
  T extends FieldValues = FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
  TTransformedValues extends FieldValues = T,
>({
  control,
  name,
  className,
  children,
}: InputProps<T, Path<T>, TTransformedValues> & {
  control: Control<T>;
  name: TName;
  className?: string;
  children: ReactNode;
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <Tabs value={field.value} onValueChange={field.onChange} className={className}>
        {children}
      </Tabs>
    )}
  />
);
