import React, {
  type MouseEventHandler,
  type FC,
  type ReactNode,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
  todo?: boolean;
  disable?: boolean;
  selected?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    onClick,
    className,
    children,
    todo = false,
    disable = false,
    selected = false,
  } = props;
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div
      onClick={(e) => {
        if (disable) return;
        setIsClicked(true);
        if (onClick !== undefined) onClick(e);
      }}
      className={twMerge(
        "border-[3px] border-solid border-black rounded-xl px-3 py-1 transition-colors cursor-pointer",
        !disable && "hover:bg-black hover:text-white",
        selected && "bg-black text-white",
        disable && "border-gray-400 text-gray-400",
        className,
      )}
    >
      {todo && isClicked ? <div>待实现～</div> : children}
    </div>
  );
};
