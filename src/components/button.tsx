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
}
export const Button: FC<ButtonProps> = (props) => {
  const { onClick, className, children, todo = false } = props;
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div
      onClick={(e) => {
        setIsClicked(true);
        if (onClick !== undefined) onClick(e);
      }}
      className={twMerge(
        "border-[3px] border-solid border-black rounded-xl px-3 py-1 transition-colors cursor-pointer",
        "hover:bg-black hover:text-white",
        className,
      )}
    >
      {todo && isClicked ? <div>待实现～</div> : children}
    </div>
  );
};
