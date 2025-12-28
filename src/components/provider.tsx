"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

import { Toaster } from "./ui/sonner";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <>
      <Toaster />
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}
