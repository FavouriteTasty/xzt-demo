import React, { type FC } from "react";
import { Button } from "@/components/button";
import { StatusBar } from "@/components/status-bar";
import { motion, type HTMLMotionProps } from "framer-motion";
import { $UI } from "@/store";

interface ConfigProps extends HTMLMotionProps<"div"> {}

export const Config: FC<ConfigProps> = (props) => {
  const { ...rest } = props;
  return (
    <motion.div className="relative h-full w-full p-3" {...rest}>
      <StatusBar className="pb-2" />
      <div className="flex gap-2">
        <Button>金钥匙</Button>
        <Button>金钥匙</Button>
      </div>
      <Button
        className="absolute bottom-0 right-0 text-xl"
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
