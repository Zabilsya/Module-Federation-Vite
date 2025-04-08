import { createFileRoute } from "@tanstack/react-router";
import { Button, ShowButtonClick } from "remote/components";

export const Route = createFileRoute("/remote/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Host приложение (Страница Remote)</p>
      <Button />
      <ShowButtonClick />
    </div>
  );
}
