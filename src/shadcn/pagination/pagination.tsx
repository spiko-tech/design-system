import * as React from "react";
import { cn } from "../../utils.js";
import { Icon } from "../../assets/icons/core/Icon.js";
import { ButtonProps, buttonVariants } from "../button/button.js";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"ul"> & { ref?: React.Ref<HTMLUListElement> }) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"li"> & { ref?: React.Ref<HTMLLIElement> }) => (
  <li ref={ref} className={cn("", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

// oxlint-disable-next-line spiko/no-single-use-type
type PaginationLinkProps = { isActive?: boolean } & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({ variant: isActive ? "outline" : "ghost", size }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="sm"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <Icon.ChevronLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="sm"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <Icon.ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <Icon.MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
