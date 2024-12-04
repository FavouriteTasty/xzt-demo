import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface FDUENDProps extends HTMLMotionProps<"div"> {}

export const FDUEND: FC<FDUENDProps> = (props) => {
  const { ...rest } = props;

  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/images/fdu-end.png" noGrayscale noStatusBar>
        <div className="w-full h-full flex items-center justify-center">
          <div className="px-2 text-2xl">
            <div className="text-3xl">结局一：</div>
            <div>很遗憾，你太依赖 AI 了。</div>
            <div>
              教务处已经预料到了 AI 泛滥的情况，你不幸被发现，黯然离场 ...
            </div>
            <div className="flex w-full items-center justify-center mt-12">
              <Button
                onClick={() => {
                  $UI.init();
                }}
              >
                再次重生
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
