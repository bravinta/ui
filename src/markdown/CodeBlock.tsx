import * as React from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { Button } from "../components/button";
import { cn } from "../utils/cn";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

type CodeBlockPropsWithTabindex = CodeBlockProps & {
  tabindex?: number | string;
};

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const snippetRef = React.useRef<HTMLPreElement>(null);
  const timeoutRef = React.useRef<number | null>(null);
  const [hasCopied, setHasCopied] = React.useState(false);
  const { style, tabIndex, tabindex, ...cleanProps } =
    props as CodeBlockPropsWithTabindex;
  const sanitizedStyle = style ? { ...style } : undefined;

  if (sanitizedStyle) {
    delete sanitizedStyle.backgroundColor;
    delete sanitizedStyle.color;
    delete sanitizedStyle.overflow;
    delete sanitizedStyle.overflowX;
    delete sanitizedStyle.overflowY;
  }

  const copyClicked = async () => {
    try {
      const snippet = snippetRef.current;
      const snippetText = snippet?.innerText ?? "";
      await navigator.clipboard.writeText(snippetText);
      setHasCopied(true);
      const currentTimeout = timeoutRef.current;
      if (currentTimeout) {
        window.clearTimeout(currentTimeout);
      }
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="group relative my-4 overflow-hidden rounded-md border border-border bg-zinc-950 text-zinc-50 shadow-sm">
      <Button
        size="icon-xs"
        variant="outline"
        className="absolute right-2 top-2 z-10 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100 bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50"
        aria-label="copy"
        onClick={copyClicked}
        title={hasCopied ? "Copied!" : "Copy to clipboard"}
      >
        {hasCopied ? (
          <CheckIcon className="size-3.5" />
        ) : (
          <CopyIcon className="size-3.5" />
        )}
      </Button>

      <ScrollArea.Root className="h-full w-full">
        <ScrollArea.Viewport className="w-full max-h-[600px] overflow-x-auto">
          <ScrollArea.Content>
            <pre
              ref={snippetRef}
              data-code-block
              className={cn(
                "p-4 text-sm font-mono whitespace-pre min-w-max",
                className,
              )}
              style={sanitizedStyle}
              tabIndex={
                tabIndex ?? (tabindex != null ? Number(tabindex) : undefined)
              }
              {...cleanProps}
            >
              {children}
            </pre>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-2 touch-none select-none flex-col border-t border-transparent bg-transparent p-px transition-colors hover:bg-zinc-800/50 data-[orientation=vertical]:w-2 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-t-0"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-700 hover:bg-zinc-600" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 touch-none select-none flex-col border-l border-transparent bg-transparent p-px transition-colors hover:bg-zinc-800/50 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-l-0"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-700 hover:bg-zinc-600" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-transparent" />
      </ScrollArea.Root>
    </div>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
      />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
