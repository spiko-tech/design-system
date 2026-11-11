import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ButtonProps } from '../button/button.js';
import { DialogContent } from '../dialog/dialog.js';
export declare const spikoDialogVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SpikoDialogSubmitTarget = {
    type: 'default';
    onClick: () => void;
}
/** Submits the form with id `formId` rendered in the dialog body. */
 | {
    type: 'inner-form';
    formId: string;
};
export type SpikoDialogSubmit = {
    label: string;
    variant?: ButtonProps['variant'];
    isSubmitting?: boolean;
    disabled?: boolean;
    target: SpikoDialogSubmitTarget;
};
export interface SpikoDialogProps extends VariantProps<typeof spikoDialogVariants> {
    title: string;
    description?: string;
    trigger: ReactNode;
    submit?: SpikoDialogSubmit;
    cancelLabel?: string;
    contentProps?: Omit<ComponentProps<typeof DialogContent>, 'children'>;
    secondaryAction?: ReactNode;
    steps?: {
        onPrevious?: () => void;
        onNext?: () => void;
        disablePrevious?: boolean;
        disableNext?: boolean;
    };
    animateHeight?: boolean;
    children: ReactNode;
}
export declare const SpikoDialog: ({ trigger, children, ...rest }: SpikoDialogProps) => import('react').JSX.Element;
export declare const ControlledSpikoDialog: ({ open, onOpenChange, children, ...rest }: Omit<SpikoDialogProps, "trigger" | "children"> & {
    children?: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => import('react').JSX.Element;
export {};
