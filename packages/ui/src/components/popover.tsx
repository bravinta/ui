import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "tailwind-variants";

// Abre el popover desde el trigger.
const PopoverTrigger = PopoverPrimitive.Trigger;

// Monta el popover fuera del flujo normal del DOM.
const PopoverPortal = PopoverPrimitive.Portal;

// Posiciona el popover respecto al trigger.
const PopoverPositioner = PopoverPrimitive.Positioner;

// Panel flotante donde aparece el contenido del popover.
function PopoverPopup({ className, ...props }: PopoverPrimitive.Popup.Props) {
  return (
    <PopoverPrimitive.Popup
      className={cn(
        "origin-(--transform-origin) rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-xs outline-none transition-all duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

// Título visible del popover.
function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      className={cn("text-base font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

// Texto descriptivo que acompaña al título.
function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  );
}

// Botón para cerrar el popover.
const PopoverClose = PopoverPrimitive.Close;

const Popover = Object.assign(PopoverPrimitive.Root, {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
});

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
