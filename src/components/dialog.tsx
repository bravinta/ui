import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

// Abre el diálogo.
const DialogTrigger = DialogPrimitive.Trigger;

// Monta el portal del diálogo fuera del flujo normal del DOM.
const DialogPortal = DialogPrimitive.Portal;

// Botón para cerrar el diálogo.
const DialogClose = DialogPrimitive.Close;

// Fondo oscuro que bloquea la interacción con el contenido de atrás.
function DialogBackdrop({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 min-h-dvh bg-background/45 backdrop-blur-[1px] transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute dark:bg-black/65",
        className,
      )}
      {...props}
    />
  );
}

// Caja principal donde se muestra el contenido del diálogo.
function DialogPopup({ className, ...props }: DialogPrimitive.Popup.Props) {
  return (
    <DialogPrimitive.Popup
      className={cn(
        "fixed top-1/2 left-1/2 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-xs outline-none transition-all duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

// Título visible del diálogo.
function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "-mt-0.5 mb-1 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

// Texto corto que explica el diálogo o da contexto extra.
function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      className={cn("mb-6 text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  );
}

const Dialog = Object.assign(DialogPrimitive.Root, {
  Root: DialogPrimitive.Root,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
