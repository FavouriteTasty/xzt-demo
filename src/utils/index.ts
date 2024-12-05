import { $UI } from "@/store";

export const triggerAnimate = (): void => {
  $UI.update("trigger animate", (draft) => {
    draft.animating = !draft.animating;
  });
};

export const randomAttribute = (): void => {
  const total = 100;
  const part1 = Math.floor(Math.random() * (total - 3)) + 1;
  const part2 = Math.floor(Math.random() * (total - part1 - 2)) + 1;
  const part3 = Math.floor(Math.random() * (total - part1 - part2 - 1)) + 1;
  const part4 = total - part1 - part2 - part3;
  $UI.update("init", (draft) => {
    draft.family = part1;
    draft.learning = part2;
    draft.luck = part3;
    draft.AISkill = part4;
  });
};
