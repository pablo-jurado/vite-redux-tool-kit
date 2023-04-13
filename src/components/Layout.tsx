import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export function Layout() {
  return (
    <main className="layout">
      <hr />
      <Outlet />
    </main>
  );
}
