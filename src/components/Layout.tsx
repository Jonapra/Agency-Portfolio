import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Cursor } from "./Cursor";
import { useCustomCursor } from "@/hooks/useCustomCursor";

interface Props { children: ReactNode; anchorPrefix?: string; }

/** Shared site shell: nav, custom cursor, grain overlay, footer. */
export const Layout = ({ children, anchorPrefix }: Props) => {
  useCustomCursor();
  return (
    <div className="grain-overlay min-h-screen">
      <Cursor />
      <Navbar anchorPrefix={anchorPrefix} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
