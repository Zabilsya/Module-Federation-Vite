import { useButtonClick } from "../store";

const Button = () => {
  const increment = useButtonClick((store) => store.increment);

  return <button onClick={increment}>qwertyuy счётчик</button>;
};

export default Button;
