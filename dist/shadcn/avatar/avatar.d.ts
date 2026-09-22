import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Avatar: ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const AvatarImage: ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) => import("react/jsx-runtime").JSX.Element;
declare const AvatarFallback: ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => import("react/jsx-runtime").JSX.Element;
declare const AvatarGroup: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const AvatarGroupCount: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
