import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface BachelorPaperProps extends HTMLMotionProps<"div"> {}

export const BachelorPaper: FC<BachelorPaperProps> = (props) => {
  const { ...rest } = props;
  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/bachelor-paper.png">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="px-1">
            <div className="text-2xl">一转眼要开始写毕业论文了</div>
            <div className="text-2xl"></div>
            <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
              <Button
                // onClick={() => {
                //   $UI.update("-> ", (draft) => {
                //     draft.status = "bachelor-paper";
                //   });
                // }}
                todo
              >
                content
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
