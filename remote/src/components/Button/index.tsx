import { useButtonClick } from "../store";

export const Button = () => {
  const increment = useButtonClick((store) => store.increment);

  return <button onClick={increment}>qwertyuy счётчик</button>;
};
