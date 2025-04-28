import { ReactNode } from "react";
import Sidebar from "./sidebar";
import { Button, Toolbar, Typography } from "@mui/material";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Typography>
        <Header />
      </Typography>
      <main style={{ display: "flex" }} >
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
