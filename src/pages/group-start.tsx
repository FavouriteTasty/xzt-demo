import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface GroupStartProps extends HTMLMotionProps<"div"> {}

export const GroupStart: FC<GroupStartProps> = (props) => {
  const { ...rest } = props;
  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/high-school.png">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <div className="text-5xl">选择你的专业</div>
          <div className="flex flex-col items-center justify-center text-4xl gap-4">
            <Button todo>法学</Button>
            <Button
              onClick={() => {
                $UI.update("set major", (draft) => {
                  draft.major = "cs";
                  draft.status = "coding";
                });
              }}
            >
              计算机科学技术
            </Button>
            <Button todo>医学</Button>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
