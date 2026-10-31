import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Samurai Itan — Web3 Community Lead",
  description: "Samurai Itan — Web3 Community Lead, Moderator and Ambassador."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}