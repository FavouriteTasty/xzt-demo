import React, { type FC } from "react";
import { Button } from "@/components/button";
import { type HTMLMotionProps, motion } from "framer-motion";
import { $UI } from "@/store";

interface HomeProps extends HTMLMotionProps<"div"> {}

export const Home: FC<HomeProps> = (props) => {
  const { ...rest } = props;
  return (
    <motion.div
      className="flex w-full h-full items-center justify-center"
      {...rest}
    >
      <div className="flex items-center justify-center flex-col gap-8 p-6">
        <div className="text-3xl">我重生了！AI时代，算法当家？</div>
        <Button
          onClick={() => {
            $UI.update("-> config", (draft) => {
              draft.status = "config";
            });
          }}
        >
          <div className="text-xl">开始游戏</div>
        </Button>
      </div>
    </motion.div>
  );
};
