import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap border border-border transition-all outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline:
        "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost:
        "border-transparent hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-destructive",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 gap-1.5 px-2.5",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs",
      sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5",
      lg: "h-12 gap-1.5 px-4.5",
      icon: "size-9",
      "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)]",
      "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)]",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>;

// Botón base para acciones, con variantes de tamaño y estilo.
export function Button({
  className = "",
  variant,
  size,
  type = "submit",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      type={type}
      className={buttonVariants({
        variant,
        size,
        className: className as string,
      })}
      {...props}
    />
  );
}

// Boton para enlaces, renderiza un <a> en lugar de un <button>
export const ButtonLink = ({
  href,
  target,
  ...props
}: ButtonProps & { href: string; target?: string }) => (
  <Button
    nativeButton={false}
    render={<a href={href} target={target} />}
    {...props}
  />
);
