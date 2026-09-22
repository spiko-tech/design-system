import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "informative" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Alert: ({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) => import("react/jsx-runtime").JSX.Element;
declare const AlertTitle: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const AlertDescription: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
export { Alert, AlertDescription, AlertTitle };
