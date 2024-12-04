import React, { type ReactNode, type FC, useEffect } from "react";
import { $UI } from "@/store";
import { useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface MainBorderProps {
  children?: ReactNode;
}

export const MainBorder: FC<MainBorderProps> = ({ children }) => {
  const status = $UI.use((state) => state.status);
  const [scope, animate] = useAnimate();

  const changeByStatus = async (): Promise<void> => {
    if (status === "config") {
      await animate(
        scope.current,
        { width: "500px", height: "300px" },
        { duration: 1, type: "spring" },
      );
      return;
    }
    if (status === "home") {
      await animate(
        scope.current,
        { width: "500px", height: "160px" },
        { duration: 1, type: "spring" },
      );
      return;
    }
    await animate(
      scope.current,
      { width: "95%", height: "90%" },
      { duration: 1, type: "spring" },
    );
  };

  useEffect(() => {
    void changeByStatus();
  }, [status]);

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] box-border">
      <div
        ref={scope}
        className={twMerge(
          "rounded-3xl shadow-[0_0_0_4px_black] w-[500px] h-[160px] overflow-hidden",
        )}
      >
        {children}
      </div>
    </div>
  );
};
