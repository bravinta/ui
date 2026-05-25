import * as React from "react";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { tv, type VariantProps } from "tailwind-variants";

const avatarVariants = tv({
  base: "relative flex select-none items-center justify-center overflow-hidden rounded-full border border-border bg-muted",
  variants: {
    size: {
      default: "size-8",
      xs: "size-5",
      sm: "size-6",
      lg: "size-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type AvatarProps = AvatarPrimitive.Root.Props &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    fallback?: React.ReactNode;
  };

// Muestra una foto de perfil y usa un fallback si no hay imagen.
function Avatar({
  className,
  size = "default",
  src,
  fallback,
  ...props
}: AvatarProps) {
  const resolvedClassName = className as string | undefined;

  return (
    <AvatarPrimitive.Root
      className={avatarVariants({ size, className: resolvedClassName })}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src}
        draggable={false}
        className="size-full object-cover"
      />
      <AvatarPrimitive.Fallback className="flex size-full items-center justify-center rounded-full bg-muted font-medium text-sm text-muted-foreground">
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export { Avatar };
