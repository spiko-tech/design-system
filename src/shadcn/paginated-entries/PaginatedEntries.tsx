import { useMemo } from "react";
import { cn } from "../../utils.js";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination/pagination.js";

const getDisplayedPages = (page: number, maxPage: number) => {
  const displayedPages = [page - 1, page, page + 1];
  return displayedPages.filter((p) => p >= 0 && p <= maxPage);
};

export const PaginatedEntries = <EntryT,>({
  pages,
  Entry,
  entryToId,
  className,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  page,
  setPage,
  renderPage,
}: {
  pages: EntryT[][];
  Entry: React.FunctionComponent<{ entry: EntryT }>;
  entryToId: (entry: EntryT) => string;
  className?: string;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  page: number;
  setPage: (page: number) => void;
  /** Optional custom renderer for entries of the current page.
   *  When provided, replaces the default flat list rendering. */
  renderPage?: (entries: EntryT[]) => React.ReactNode;
}) => {
  const loadedMaxPage = Math.max(0, pages.length - 1);
  const virtualMaxPage = hasNextPage ? loadedMaxPage + 1 : loadedMaxPage;

  const displayedEntries = pages[page] ?? [];
  const displayedPages = useMemo(
    () => getDisplayedPages(page, virtualMaxPage),
    [page, virtualMaxPage],
  );
  const canPaginatePrevious = page > 0;
  const canPaginateNext = page < virtualMaxPage;

  const handleNextPage = () => {
    if (page < loadedMaxPage) {
      setPage(page + 1);
    } else if (hasNextPage) {
      setPage(page + 1);
      if (!isFetchingNextPage) {
        fetchNextPage();
      }
    }
  };

  const handlePageClick = (targetPage: number) => {
    if (targetPage <= loadedMaxPage) {
      setPage(targetPage);
    } else if (
      targetPage <= virtualMaxPage &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      setPage(targetPage);
      fetchNextPage();
    }
  };

  const entriesComponent = renderPage ? (
    renderPage(displayedEntries)
  ) : (
    <div className={cn("flex flex-col gap-4", className)}>
      {displayedEntries.map((entry) => (
        <Entry key={entryToId(entry)} entry={entry} />
      ))}
    </div>
  );

  if (virtualMaxPage === 0 && !hasNextPage) return entriesComponent;

  const showLeadingEllipsis = Math.min(...displayedPages) > 1;
  const showTrailingEllipsis =
    Math.max(...displayedPages) < virtualMaxPage - 1 ||
    (hasNextPage && !displayedPages.includes(virtualMaxPage));

  return (
    <div className="flex flex-col gap-4">
      {entriesComponent}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              isActive={canPaginatePrevious}
              onClick={() => {
                if (canPaginatePrevious) setPage(page - 1);
              }}
              className="cursor-pointer"
            />
          </PaginationItem>

          {displayedPages.every((p) => p !== 0) && (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => setPage(0)}
                  className="cursor-pointer"
                >
                  {1}
                </PaginationLink>
              </PaginationItem>
              {showLeadingEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}
          {displayedPages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={() => handlePageClick(p)}
                className="cursor-pointer"
              >
                {p + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {displayedPages.every((p) => p !== virtualMaxPage) && (
            <>
              {showTrailingEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {!hasNextPage && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageClick(virtualMaxPage)}
                    className="cursor-pointer"
                  >
                    {virtualMaxPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
            </>
          )}
          <PaginationItem>
            <PaginationNext
              isActive={canPaginateNext && !isFetchingNextPage}
              onClick={handleNextPage}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
