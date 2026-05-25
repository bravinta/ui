import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "tailwind-variants";

// Abre el menú desplegable.
const DropdownMenuTrigger = MenuPrimitive.Trigger;

// Monta el menú fuera del flujo normal del DOM.
const DropdownMenuPortal = MenuPrimitive.Portal;

// Posiciona el menú respecto al trigger.
const DropdownMenuPositioner = MenuPrimitive.Positioner;

// Panel flotante donde aparecen las opciones del menú.
function DropdownMenuPopup({ className, ...props }: MenuPrimitive.Popup.Props) {
  return (
    <MenuPrimitive.Popup
      className={cn(
        "min-w-48 origin-(--transform-origin) rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xs outline-none transition-all duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

// Opción individual del menú desplegable.
function DropdownMenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      className={cn(
        "flex h-8 cursor-default items-center gap-2 rounded-lg px-2 text-sm leading-4 outline-none select-none transition-colors data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

// Separador visual entre grupos de opciones.
function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      className={cn("mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

const DropdownMenu = Object.assign(MenuPrimitive.Root, {
  Root: MenuPrimitive.Root,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Positioner: DropdownMenuPositioner,
  Popup: DropdownMenuPopup,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
});

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuPopup,
  DropdownMenuItem,
  DropdownMenuSeparator,
};