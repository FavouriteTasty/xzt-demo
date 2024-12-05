import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface EndProps extends HTMLMotionProps<"div"> {
  title: string;
  contents: string[];
  imageSrc: string;
}

export const End: FC<EndProps> = (props) => {
  const { title, contents, imageSrc, ...rest } = props;

  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc={imageSrc} noGrayscale noStatusBar>
        <div className="w-full h-full flex items-center justify-center">
          <div className="px-2 text-2xl">
            <div className="text-3xl">{title}</div>
            {contents.map((item, index) => (
              <div key={`cs-working-${index}`}>{item}</div>
            ))}
            <div className="flex w-full items-center justify-center mt-12">
              <Button
                onClick={() => {
                  $UI.init();
                }}
              >
                再次重生
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
