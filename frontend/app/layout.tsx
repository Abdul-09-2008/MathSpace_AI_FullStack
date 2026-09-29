import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "MathSpace — Mathematics Universe",
  description: "Mathematics, AI, visualization, simulation and research."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
