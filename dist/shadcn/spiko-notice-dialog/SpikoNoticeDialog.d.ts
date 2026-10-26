import { ReactNode } from 'react';
declare const badgeToneClassNames: {
    neutral: string;
    warning: string;
    destructive: string;
};
export type SpikoNoticeDialogBadgeTone = keyof typeof badgeToneClassNames;
export interface SpikoNoticeDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    badge?: {
        tone: SpikoNoticeDialogBadgeTone;
        icon: ReactNode;
    };
    title: string;
    description: ReactNode;
    action?: {
        label: string;
        onAction: () => void;
        variant?: 'default' | 'destructive';
        disabled?: boolean;
    };
    dismissLabel: string;
    closeLabel: string;
    children?: ReactNode;
}
export declare const SpikoNoticeDialog: ({ open, onOpenChange, badge, title, description, action, dismissLabel, closeLabel, children, }: SpikoNoticeDialogProps) => import('react').JSX.Element;
export {};
