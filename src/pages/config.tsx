import React, { useEffect, useState, type FC } from "react";
import { Button } from "@/components/button";
import { StatusBar } from "@/components/status-bar";
import { motion, type HTMLMotionProps } from "framer-motion";
import { $UI } from "@/store";
import { randomAttribute } from "@/utils";

interface ConfigProps extends HTMLMotionProps<"div"> {}

export const Config: FC<ConfigProps> = (props) => {
  const { ...rest } = props;
  const [resetTimes, setResetTimes] = useState<number>(300);
  const [goldKeySelected, setGoldKeySelected] = useState<boolean>(false);

  useEffect(() => {
    randomAttribute();
  }, []);

  return (
    <motion.div className="relative h-full w-full p-3 box-border" {...rest}>
      <StatusBar className="pb-2" />
      <div className="flex gap-2">
        <Button
          disable={!(resetTimes > 0) || goldKeySelected}
          onClick={() => {
            randomAttribute();
            setResetTimes((prev) => prev - 1);
          }}
        >
          重新随机 剩余次数{resetTimes}
        </Button>
        <Button
          selected={goldKeySelected}
          onClick={() => {
            if (!goldKeySelected) {
              $UI.update("gold key", (draft) => {
                draft.family += 50;
                setGoldKeySelected(true);
              });
            } else {
              $UI.update("gold key", (draft) => {
                draft.family -= 50;
                setGoldKeySelected(false);
              });
            }
          }}
        >
          金汤匙
        </Button>
      </div>
      <Button
        className="absolute bottom-3 right-3 text-xl"
        onClick={() => {
          $UI.update("-> prologue", (draft) => {
            draft.status = "prologue";
          });
        }}
      >
        开始！
      </Button>
    </motion.div>
  );
};
