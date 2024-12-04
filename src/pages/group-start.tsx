import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { useState, type FC } from "react";

interface GroupStartProps extends HTMLMotionProps<"div"> {}

export const GroupStart: FC<GroupStartProps> = (props) => {
  const { ...rest } = props;
  const [next, setNext] = useState<boolean>(false);

  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/group-start.png">
        <div className="flex items-center justify-center w-full h-full">
          {!next && (
            <div>
              <div className="text-2xl">大学固定节目：小组合作项目</div>
              <div className="text-2xl">负责写稿子的你，打算用 AI ...</div>
              <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
                <Button
                  onClick={() => {
                    $UI.update("totally ai", (draft) => {
                      draft.AISkill = draft.AISkill + 20;
                      draft.learning = draft.learning + 5;
                    });
                    setNext(true);
                  }}
                >
                  是负责写稿子的AI
                </Button>
                <Button
                  onClick={() => {
                    $UI.update("totally ai", (draft) => {
                      draft.AISkill = draft.AISkill + 15;
                      draft.learning = draft.learning + 10;
                    });
                    setNext(true);
                  }}
                >
                  帮帮我吧，AI先生
                </Button>
                <Button
                  onClick={() => {
                    $UI.update("totally ai", (draft) => {
                      draft.learning = draft.learning + 25;
                    });
                    setNext(true);
                  }}
                >
                  ...难道你不想用AI？
                </Button>
              </div>
            </div>
          )}
          {next && (
            <div>
              <div className="text-2xl">队友竟然都是 AI ？！</div>
              <div className="text-2xl">有的稿子实在没个人形 ...</div>
              <div className="flex flex-col items-center justify-center text-xl gap-4 mt-12">
                <Button
                  onClick={() => {
                    $UI.update("totally ai", (draft) => {
                      draft.AISkill = draft.AISkill + 5;
                      draft.learning = draft.learning + 10;
                      draft.status = "group-end";
                    });
                  }}
                >
                  无所谓！我会出手！全都交给我改
                </Button>
                <Button
                  onClick={() => {
                    $UI.update("totally ai", (draft) => {
                      draft.AISkill = draft.AISkill + 15;
                      draft.status = "group-end";
                    });
                  }}
                >
                  我的 AI 比他们的都强！全都交给我的AI
                </Button>
              </div>
            </div>
          )}
        </div>
      </Display>
    </motion.div>
  );
};
