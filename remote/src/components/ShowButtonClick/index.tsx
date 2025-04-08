import { useButtonClick } from "../store";

export const ShowButtonClick = () => {
  const count = useButtonClick((store) => store.count);

  return <p>Вы кликнули {count} раз</p>;
};
