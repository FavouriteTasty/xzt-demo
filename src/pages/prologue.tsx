import { Button } from "@/components/button";
import { $UI } from "@/store";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useState, type FC } from "react";

interface PrologueProps extends HTMLMotionProps<"div"> {}

const normalText = [
  "你重生了",
  "一觉醒来，你已经不是那个在AI时代焦虑不安的大学生，而是重新回到了过去的人生。",
  "你只记得穿越前，你看到了几个大字。",
  "AI时代，算法当家",
  "不过，今天不一样了。你带着未来的记忆 ...",
  "然而你穿越到了刚进入大学的时候 ~",
];

const richText = [
  "你重生了",
  "一觉醒来，你已经不是那个在AI时代焦虑不安的大学生，而是重新回到了过去的人生。",
  "你只记得穿越前，你看到了几个大字。",
  "AI时代，算法当家",
  "不过，今天不一样了。你带着未来的记忆 ...",
  "哦！你家里颇有能量，高中就送你来到了波士顿",
  "随后你一路哈哈哈（哈佛哈佛哈佛）读完了本硕博 ...",
];

export const Prologue: FC<PrologueProps> = (props) => {
  const { ...rest } = props;
  const [step, setStep] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState(true); // 用于控制计时器是否启用
  const family = $UI.use((state) => state.family);
  const text = family > 80 ? richText : normalText;

  useEffect(() => {
    if (step >= text.length) {
      setIsTimerActive(false);
      return;
    }

    const intervalId = setInterval(() => {
      setStep((prev) => prev + 1); // 增加计数器
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [step]);

  useEffect(() => {
    if (!isTimerActive) {
      $UI.update("", (draft) => {
        draft.status = family > 80 ? "wwt-end" : "coding";
      });
      console.log("stop");
    }
  }, [isTimerActive]);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      {...rest}
    >
      <AnimatePresence mode="wait">
        {step < text.length && (
          <motion.div
            className="text-4xl"
            key={`prologue-${step}`}
            exit={{ opacity: 0 }}
          >
            {text[step]}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute top-2 right-2">
        <Button
          className="text-2xl"
          onClick={() => {
            $UI.update("", (draft) => {
              draft.status = family > 80 ? "wwt-end" : "coding";
            });
          }}
        >
          跳过
        </Button>
      </div>
    </motion.div>
  );
};
