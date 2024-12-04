import React, { type HTMLAttributes, type FC } from "react";
import { ProgressBar } from "./progress-bar";
import { $UI } from "@/store";

export const StatusBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const family = $UI.use((state) => state.family);
  const learning = $UI.use((state) => state.learning);
  const luck = $UI.use((state) => state.luck);
  const AISkill = $UI.use((state) => state.AISkill);

  const { ...rest } = props;

  return (
    <div {...rest}>
      <div className="flex items-center gap-2 h-8">
        <div className="text-xl w-20 text-right">家庭实力</div>
        <div>
          <ProgressBar min={0} max={100} current={family} />
        </div>
      </div>
      <div className="flex items-center gap-2 h-8">
        <div className="text-xl w-20 text-right">学习能力</div>
        <div>
          <ProgressBar min={0} max={100} current={learning} />
        </div>
      </div>
      <div className="flex items-center gap-2 h-8">
        <div className="text-xl w-20 text-right">幸运</div>
        <div>
          <ProgressBar min={0} max={100} current={luck} />
        </div>
      </div>
      <div className="flex items-center gap-2 h-8">
        <div className="text-xl w-20 text-right">AI 能力</div>
        <div>
          <ProgressBar min={0} max={100} current={AISkill} />
        </div>
      </div>
    </div>
  );
};
