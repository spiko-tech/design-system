import { ButtonProps } from '../button/button.js';
import * as React from 'react';
declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): React.JSX.Element;
    displayName: string;
};
declare const PaginationContent: {
    ({ ref, className, ...props }: React.ComponentProps<"ul"> & {
        ref?: React.Ref<HTMLUListElement>;
    }): React.JSX.Element;
    displayName: string;
};
declare const PaginationItem: {
    ({ ref, className, ...props }: React.ComponentProps<"li"> & {
        ref?: React.Ref<HTMLLIElement>;
    }): React.JSX.Element;
    displayName: string;
};
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, 'size'> & React.ComponentProps<'a'>;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): React.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
