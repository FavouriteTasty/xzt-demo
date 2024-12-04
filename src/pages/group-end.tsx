import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface GroupEndProps extends HTMLMotionProps<"div"> {}

export const GroupEnd: FC<GroupEndProps> = (props) => {
  const { ...rest } = props;
  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/group-end.png">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="px-1">
            <div className="text-2xl">你修改了低水准的 AI 稿子。</div>
            <div className="text-2xl">
              汇报当天，老师指出了某组同学引用了未经验证生成的 AI 论据 ...
            </div>
            <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
              <Button
                onClick={() => {
                  $UI.update("-> ", (draft) => {
                    draft.status = "bachelor-paper";
                  });
                }}
              >
                庆幸不已 ...
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
