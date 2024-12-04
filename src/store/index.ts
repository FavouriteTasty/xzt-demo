import { model } from "@/packages/model";

export interface UIModel {
  family: number;
  learning: number;
  luck: number;
  AISkill: number;
  major: "cs" | "law" | "medical" | undefined;

  status: "home" | "config" | "prologue" | "high-school" | "coding";
  animating: boolean;
}

export const $UI = model<UIModel>("UI", {
  family: 0,
  learning: 0,
  luck: 0,
  AISkill: 0,
  major: undefined,
  status: "coding",
  animating: false,
});
