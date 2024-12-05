import { Display } from "@/components/display";
import { makeFrames } from "@/components/frame";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import React, { useState, type FC } from "react";
import { domesticLearning } from "./config";

interface DomesticLearningProps extends HTMLMotionProps<"div"> {}

export const DomesticLearning: FC<DomesticLearningProps> = (props) => {
  const { ...rest } = props;
  const [step, setStep] = useState<number>(0);
  const frames = makeFrames(domesticLearning, setStep);
  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/images/domestic-learning.png">
        <div className="flex items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">
            {step < frames.length && frames[step]}
          </AnimatePresence>
        </div>
      </Display>
    </motion.div>
  );
};
