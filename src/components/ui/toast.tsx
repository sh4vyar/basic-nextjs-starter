"use client";

import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { AlertTriangle, Check, Info, X } from "lucide-react";
import { toast as sonnerToast } from "sonner";

// === Toast container variants ===
export const toastVariants = cva(
  "pointer-events-auto flex items-center overflow-hidden rounded-lg border p-2 shadow-lg transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-background border-border shadow",
        success: "bg-background border-border shadow",
        error: "bg-background border-border shadow",
        warning: "bg-background border-border shadow",
      },
      size: {
        default: "h-16 min-w-sm",
        sm: "h-16 min-w-xs",
        lg: "h-24 min-w-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// === Icon variants ===
const toastIconVariants = cva(
  "flex w-10 flex-shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        default: "text-blue-600",
        success: "text-success",
        warning: "text-warning",
        error: "text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// === Toast Component ===
interface ToastProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "id">,
    VariantProps<typeof toastVariants> {
  toastId: string | number;
  title: string;
  description?: string;
}

const Toast = ({
  toastId,
  title,
  description,
  variant,
  size,
  className,
  ...props
}: ToastProps) => {
  return (
    <div
      className={cn(
        toastVariants({ variant, size }),
        "group flex items-center justify-center",
        className
      )}
      {...props}
    >
      <div className={cn(toastIconVariants({ variant }))}>
        {variant === "success" && <Check className="size-5" />}
        {variant === "error" && <X className="size-5" />}
        {variant === "warning" && <AlertTriangle className="size-5" />}
        {variant === "default" && <Info className="size-5" />}
      </div>

      <div className="flex-1 p-2">
        <p className="text-sm font-medium">{title}</p>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>

      <button
        className="hover:text-foreground text-foreground/50 h-full px-2 opacity-0 transition-all group-hover:opacity-70"
        onClick={() => sonnerToast.dismiss(toastId)}
      >
        <X className="size-4 cursor-pointer" />
      </button>
    </div>
  );
};

// === API Hook ===
type ToastOptions = {
  title: string;
  description?: string;
  variant?: VariantProps<typeof toastVariants>["variant"];
  size?: VariantProps<typeof toastVariants>["size"];
  duration?: number;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
};

export function showToast({
  title,
  description,
  variant = "default",
  size = "default",
  duration = 5000,
  position = "bottom-right",
}: ToastOptions) {
  sonnerToast.custom(
    id => (
      <Toast
        toastId={id}
        title={title}
        description={description}
        variant={variant}
        size={size}
      />
    ),
    {
      duration,
      position,
    }
  );
}
