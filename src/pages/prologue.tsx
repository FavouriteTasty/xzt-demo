import { Button } from "@/components/button";
import { $UI } from "@/store";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useState, type FC } from "react";

interface PrologueProps extends HTMLMotionProps<"div"> {}

const normalText = [
  "你重生了",
  "一觉醒来，你已经不是那个在AI时代焦虑不安的大学生，而是重新回到了过去的人生。",
  "你只记得穿越前，你看到了几个大字。",
  "占位符：我们的 ppt 标题",
  "不过，今天不一样了。你带着未来的记忆 ...",
  "然而你穿越到了高考出分的时候，现在该选择你的专业了 ~",
];

export const Prologue: FC<PrologueProps> = (props) => {
  const { ...rest } = props;
  const [step, setStep] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState(true); // 用于控制计时器是否启用
  const text = normalText;

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
        draft.status = "high-school";
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
              draft.status = "high-school";
            });
          }}
        >
          跳过
        </Button>
      </div>
    </motion.div>
  );
};
