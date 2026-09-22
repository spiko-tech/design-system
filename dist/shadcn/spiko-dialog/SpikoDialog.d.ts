import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ButtonProps } from '../button/button.js';
import { DialogContent } from '../dialog/dialog.js';
declare const spikoDialogVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SpikoDialogProps extends VariantProps<typeof spikoDialogVariants> {
    title: string;
    description?: string;
    trigger: ReactNode;
    submitLabel?: string;
    cancelLabel?: string;
    onSubmit?: () => void;
    disableSubmit?: boolean;
    isSubmitting?: boolean;
    submitVariant?: ButtonProps['variant'];
    contentProps?: Omit<ComponentProps<typeof DialogContent>, 'children'>;
    secondaryAction?: ReactNode;
    children: ReactNode;
}
export declare const SpikoDialog: ({ trigger, children, ...rest }: SpikoDialogProps) => import("react/jsx-runtime").JSX.Element;
export declare const ControlledSpikoDialog: ({ open, onOpenChange, children, ...rest }: Omit<SpikoDialogProps, "trigger" | "children"> & {
    children?: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => import("react/jsx-runtime").JSX.Element;
export {};
