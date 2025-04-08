import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/">Main</Link>
        <Link to="/remote">Remote</Link>
      </div>
      <Outlet />
    </div>
  ),
});
