import { type UIModel } from "@/store";
import { Button } from "@/components/button";
import { $UI } from "@/store";
import { motion } from "framer-motion";
import React from "react";
export interface IChoise {
  content: string;
  onClick: Partial<UIModel>;
}
export interface IFrame {
  titles: string[];
  choices: IChoise[];
}

function genKey(cnt: string): string {
  return (
    Math.floor(Math.random() * 1000) +
    cnt.substring(0, 4) +
    Math.floor(Math.random() * 1000)
  );
}

function makeFrame(
  frame: IFrame,
  frameIndex: number,
  setStep: React.Dispatch<React.SetStateAction<number>>,
): JSX.Element {
  return (
    <motion.div key={genKey(frameIndex.toString())} exit={{ opacity: 0 }}>
      {frame.titles.map((title) => (
        <div className="text-2xl" key={genKey(title)}>
          {title}
        </div>
      ))}

      <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
        {frame.choices.map((choice) => (
          <Button
            key={genKey(choice.content)}
            onClick={() => {
              $UI.update("choose ai", (draft) => {
                draft.learning += choice.onClick.learning ?? 0;
                draft.family += choice.onClick.family ?? 0;
                draft.luck += choice.onClick.luck ?? 0;
                draft.AISkill += choice.onClick.AISkill ?? 0;
                if (choice.onClick.major !== undefined) {
                  draft.major = choice.onClick.major;
                }
                if (choice.onClick.status !== undefined) {
                  draft.status = choice.onClick.status;
                }
                if (choice.onClick.animating !== undefined) {
                  draft.animating = choice.onClick.animating;
                }
              });
              setStep(frameIndex + 1);
            }}
          >
            {choice.content}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}

export function makeFrames(
  frames: IFrame[],
  setStep: React.Dispatch<React.SetStateAction<number>>,
): JSX.Element[] {
  return frames.map((frame, index) => makeFrame(frame, index, setStep));
}
