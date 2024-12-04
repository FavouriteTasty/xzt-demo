import React, { type FC } from "react";
import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
  className?: string;
  min: number;
  max: number;
  current: number;
}

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { className, min, max, current } = props;
  const value = ((current - min) / (max - min)) * 100;
  return (
    <div
      className={twMerge(
        "relative w-40 h-[10px] rounded-full border-[3px] border-solid border-black",
        className,
      )}
    >
      <div className="w-full h-full bg-black "></div>
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-white transition-all"
        style={{ width: `${value < 5 ? 5 : value}%` }}
      ></div>
    </div>
  );
};
