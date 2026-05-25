import * as React from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "tailwind-variants";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="my-10 w-full overflow-hidden rounded-3xl border border-card-foreground/10 bg-card shadow-sm">
      <ScrollArea.Root className="w-full">
        <ScrollArea.Viewport className="w-full overflow-x-auto">
          <ScrollArea.Content>
            <table
              className={cn(
                "w-full text-left border-collapse min-w-[600px]",
                className,
              )}
              {...props}
            >
              {children}
            </table>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-2 touch-none select-none flex-col border-t border-transparent bg-transparent p-px transition-colors hover:bg-zinc-800/50 data-[orientation=vertical]:w-2 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-t-0"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-700 hover:bg-zinc-600" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <thead
      className={cn("bg-card-foreground/5", className)}
      {...props}
    >
      {children}
    </thead>
  );
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={cn(className)}
      {...props}
    >
      {children}
    </tbody>
  );
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "transition-colors hover:bg-card-foreground/5",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export function TableHeader({ children, className, ...props }: TableHeaderProps) {
  return (
    <th
      className={cn(
        "font-semibold text-foreground px-6 py-4 border-b border-card-foreground/10",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        "px-6 py-4 text-muted-foreground border-b border-card-foreground/10",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export function TableFooter({ children, className, ...props }: TableFooterProps) {
  return (
    <tfoot
      className={cn(
        "bg-card-foreground/5 font-semibold text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
}
