import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-[min(var(--radius-md),8px)] border border-transparent font-medium leading-none whitespace-nowrap transition-colors select-none [&>svg]:pointer-events-none [&>svg]:size-3",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      destructive:
        "border-destructive/30 bg-destructive/10 text-destructive dark:bg-destructive/20",
      outline: "border-border bg-background text-foreground shadow-xs",
      "outline-primary": "border-primary/30 bg-primary/10 text-primary",
      ghost: "bg-muted text-muted-foreground",
      link: "border-0 bg-transparent p-0 text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-7 px-2 text-xs",
      sm: "h-5 px-2 text-[11px]",
      lg: "h-8 px-3 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Muestra una etiqueta corta para resaltar estado o categoría.
function Badge({
  className = "",
  variant,
  size,

  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: badgeVariants({ variant, size, className }),
      },
      props,
    ),
    state: {
      variant,
      size,
      slot: "badge",
    },
  });
}

export { Badge, badgeVariants };
