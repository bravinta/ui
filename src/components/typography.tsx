import type { HTMLAttributes, OlHTMLAttributes } from "react";
import { cn } from "../utils/cn";

function H1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight text-foreground md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-4xl font-bold text-foreground", className)}
      {...props}
    />
  );
}

function H3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xl font-bold text-foreground", className)} {...props} />
  );
}

function H4({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn("text-lg font-semibold text-foreground", className)} {...props} />
  );
}

function P({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-foreground/80", className)} {...props} />;
}

function Small({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <small className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

function Lead({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  );
}

function Blockquote({
  className,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function InlineCode({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}

function List({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  );
}

function OrderedList({
  className,
  ...props
}: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
      {...props}
    />
  );
}

function SectionLabel({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-muted-foreground uppercase tracking-widest text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
}

export {
  H1,
  H2,
  H3,
  H4,
  P,
  Small,
  Lead,
  Blockquote,
  InlineCode,
  List,
  OrderedList,
  SectionLabel,
};
