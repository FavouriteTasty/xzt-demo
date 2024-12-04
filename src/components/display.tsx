import React, { type ReactNode, type FC } from "react";
import { StatusBar } from "./status-bar";
import { twMerge } from "tailwind-merge";

interface DisplayProps {
  children?: ReactNode;
  imageSrc: string;
  noGrayscale?: boolean;
  noStatusBar?: boolean;
}

export const Display: FC<DisplayProps> = (props) => {
  const {
    children,
    imageSrc,
    noGrayscale = false,
    noStatusBar = false,
  } = props;
  return (
    <div className="relative flex w-full h-full">
      {!noStatusBar && (
        <StatusBar className="absolute left-[15px] top-[10px] flex items-center justify-center z-50 gap-2" />
      )}
      <div className="h-full">
        <img
          className={twMerge("h-full", !noGrayscale && "grayscale")}
          src={imageSrc}
        ></img>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
