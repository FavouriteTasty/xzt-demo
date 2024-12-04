import { $UI } from "@/store";

export const triggerAnimate = (): void => {
  $UI.update("trigger animate", (draft) => {
    draft.animating = !draft.animating;
  });
};
