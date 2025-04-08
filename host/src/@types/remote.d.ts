declare module "remote/components" {
  import { FC } from "react";
  const Button: FC;
  const ShowButtonClick: FC;

  interface ButtonClick {
    count: number;
    increment: () => void;
  }
  const useButtonClick: {
    (): ButtonClick;
    <T>(selector: (state: ButtonClick) => T): T;
  };
  export { Button, ShowButtonClick, useButtonClick };
}
