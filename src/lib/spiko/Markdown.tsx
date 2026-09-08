import MarkdownToJSX from 'markdown-to-jsx';

export const Markdown = ({ children }: { children: string }) => {
  return (
    <MarkdownToJSX
      options={{
        overrides: {
          h1: { props: { className: 'scroll-m-20 spiko-heading-1-semibold tracking-tight' } },
          h2: {
            props: { className: 'scroll-m-20 border-b pb-2 mt-8 spiko-heading-2-semibold tracking-tight first:mt-0' },
          },
          h3: { props: { className: 'scroll-m-20 mt-8 spiko-heading-3-semibold tracking-tight first:mt-0' } },
          h4: { props: { className: 'scroll-m-20 mt-6 spiko-heading-4-semibold tracking-tight first:mt-0' } },
          p: { props: { className: 'leading-7 [&:not(:first-child)]:mt-6' } },
          blockquote: { props: { className: 'mt-6 border-l-2 pl-6 italic' } },
          table: { props: { className: 'w-full mt-6' } },
          tr: { props: { className: 'm-0 border-t p-0 even:bg-secondary' } },
          th: {
            props: {
              className:
                'border px-4 py-2 text-left spiko-text-base-bold [&[align=center]]:text-center [&[align=right]]:text-right',
            },
          },
          td: {
            props: {
              className: 'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
            },
          },
          ul: { props: { className: 'my-6 ml-6 list-disc [&>li]:mt-2' } },
          ol: { props: { className: 'my-6 ml-6 list-decimal [&>li]:mt-2' } },
          pre: {
            props: {
              className:
                'my-6 overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-foreground [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit',
            },
          },
          code: { props: { className: 'relative rounded-sm bg-secondary px-[0.3rem] py-[0.2rem] font-mono text-sm' } },
          a: { props: { className: 'text-information hover:opacity-80' } },
        },
      }}
    >
      {children}
    </MarkdownToJSX>
  );
};
