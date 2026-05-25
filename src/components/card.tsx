import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-card border border-card-foreground/10 rounded-3xl ",
        className,
      )}
      {...props}
    />
  );
}
