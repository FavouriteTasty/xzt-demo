import { model } from "@/packages/model";

export interface UIModel {
  family: number;
  learning: number;
  luck: number;
  AISkill: number;
  AIDepend: number;
  major: "cs" | "law" | "medical" | undefined;

  status:
    | "home"
    | "config"
    | "prologue"
    | "high-school"
    | "coding"
    | "group-start"
    | "group-end"
    | "in-class"
    | "ted-speech"
    | "bio-lab"
    | "bachelor-paper"
    | "bachelor-graduation"
    | "domestic-learning"
    | "abroad-learning"
    // ends
    | "byd-end"
    | "school-end"
    | "klm-end"
    | "zbmk-end"
    | "lxl-end"
    | "dc-end"
    | "gl-end"
    | "wwt-end";

  animating: boolean;
}

export const $UI = model<UIModel>("UI", {
  family: 0,
  learning: 0,
  luck: 0,
  AISkill: 0,
  AIDepend: 0,
  major: undefined,
  status: "home",
  animating: false,
});
