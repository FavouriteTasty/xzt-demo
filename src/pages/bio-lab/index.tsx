import { Display } from "@/components/display";
import { makeFrames } from "@/components/frame";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import React, { useState, type FC } from "react";
import { TEDSpeechConfig } from "./config";

interface BioLabProps extends HTMLMotionProps<"div"> {}

export const BioLab: FC<BioLabProps> = (props) => {
  const { ...rest } = props;
  const [step, setStep] = useState<number>(0);
  const frames = makeFrames(TEDSpeechConfig, setStep);
  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/images/bio-lab.png">
        <div className="flex items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">
            {step < frames.length && frames[step]}
          </AnimatePresence>
        </div>
      </Display>
    </motion.div>
  );
};
