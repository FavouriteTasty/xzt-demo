import React, { type ReactNode, type FC } from "react";
import { StatusBar } from "./status-bar";

interface DisplayProps {
  children?: ReactNode;
  imageSrc: string;
}

export const Display: FC<DisplayProps> = (props) => {
  const { children, imageSrc } = props;
  return (
    <div className="relative flex w-full h-full">
      <StatusBar className="absolute left-[15px] top-[10px] flex items-center justify-center z-50 gap-2" />
      <div className="h-full">
        <img className="h-full grayscale" src={imageSrc}></img>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
