import { createFileRoute } from "@tanstack/react-router";
// import { useButtonClick } from "remote/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  // const count = useButtonClick((store) => store.count);

  return (
    <div>
      <p>Host приложение (Главная страница)</p>
      <p>Количество кликов из global zustand state</p>
    </div>
  );
}
