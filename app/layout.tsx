import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A reversed pair inside a window',
  description: 'Same asset, parties swapped, 40 seconds apart. Flagged at 60 seconds, not at 30. Not a market scan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
