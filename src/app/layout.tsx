import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/provider";
import { Poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Basic Next.js Starter",
  description: "A minimal Next.js starter template with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </head>
      <body className={Poppins.className}>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
