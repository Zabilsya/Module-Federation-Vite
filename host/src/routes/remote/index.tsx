import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Button = lazy(() => import("remote/Button"));

export const Route = createFileRoute("/remote/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Host приложение (Страница Remote)</p>
      <Suspense fallback="Loading...">
        <Button />
      </Suspense>
      {/* <ShowButtonClick /> */}
    </div>
  );
}
