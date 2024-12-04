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
      <Display imageSrc="/images/bachelor-paper.png">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="px-1">
            <div className="text-2xl">一转眼要开始写毕业论文了</div>
            <div className="text-2xl">要不要使用 AI 帮我写呢</div>
            <div className="text-2xl"></div>
            <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
              <Button
                onClick={() => {
                  $UI.update("-> bachelor-graduation", (draft) => {
                    draft.AIDepend += 20;
                    draft.AISkill += 10;
                    draft.status = "bachelor-graduation";
                  });
                }}
              >
                我命由 AI 不由我！
              </Button>
              <Button
                onClick={() => {
                  $UI.update("-> bachelor-graduation", (draft) => {
                    draft.learning += 10;
                    draft.AIDepend += 5;
                    draft.AISkill += 10;
                    draft.status = "bachelor-graduation";
                  });
                }}
              >
                AI 帮我润色降重
              </Button>
              <Button
                onClick={() => {
                  $UI.update("-> bachelor-graduation", (draft) => {
                    draft.learning += 20;
                    draft.status = "bachelor-graduation";
                  });
                }}
              >
                天赋、汗水和努力
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
