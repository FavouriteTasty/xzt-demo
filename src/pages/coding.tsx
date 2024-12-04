import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import React, { useState, type FC } from "react";

interface CodingProps extends HTMLMotionProps<"div"> {}

export const Coding: FC<CodingProps> = (props) => {
  const { ...rest } = props;
  const [next, setNext] = useState<boolean>(false);

  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/coding.png">
        <div className="flex items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">
            {!next && (
              <motion.div key="coding-1" exit={{ opacity: 0 }}>
                <div className="text-2xl">你又又又成功考入了复旦大学！</div>
                <div className="text-2xl">
                  复旦大学要求每个学生必修一门编程语言，你的选择是
                </div>
                <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
                  <Button
                    onClick={() => {
                      $UI.update("choose ai", (draft) => {
                        draft.learning = draft.learning + 10;
                        draft.AISkill = draft.AISkill + 10;
                      });
                      setNext(true);
                    }}
                  >
                    Python 这一世我要 All in AI ！
                  </Button>
                  <Button
                    onClick={() => {
                      $UI.update("!choose ai", (draft) => {
                        draft.learning = draft.learning + 15;
                        draft.AISkill = draft.AISkill + 5;
                      });
                      setNext(true);
                    }}
                  >
                    其他乱七八糟的语言
                  </Button>
                </div>
              </motion.div>
            )}
            {next && (
              <motion.div key="coding-2" exit={{ opacity: 0 }}>
                <div className="text-2xl">课程作业来了！</div>
                <div className="text-2xl">面对一门编程课的作业你的选择是？</div>
                <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
                  <Button
                    onClick={() => {
                      $UI.update("choose ai", (draft) => {
                        draft.learning = draft.learning + 10;
                        draft.AISkill = draft.AISkill + 10;
                      });
                    }}
                  >
                    <div>ChatGPT、通义千问、Kimi、文心一言</div>
                    <div>全部启动！</div>
                  </Button>
                  <Button
                    onClick={() => {
                      $UI.update("!choose ai", (draft) => {
                        draft.learning = draft.learning + 15;
                        draft.AISkill = draft.AISkill + 5;
                      });
                    }}
                  >
                    <div>祖宗之法不可变！</div>
                    <div>百度启动！</div>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Display>
    </motion.div>
  );
};
