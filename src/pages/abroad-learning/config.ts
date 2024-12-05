import { type IFrame } from "@/components/frame";

export const domesticLearning: IFrame[] = [
  {
    titles: [
      "你选择国外深造",
      "家里为了你卖掉1套北上广深的老破小",
      "这注定是一条坎坷的路",
      "也是一条可能会通往不平凡的路",
    ],
    choices: [
      {
        content: "我已知晓",
        onClick: {
          learning: 10,
        },
      },
    ],
  },
  {
    titles: ["你想怎样度过这第一段也是最后一段科研生活？"],
    choices: [
      {
        content: "我慧眼如炬",
        onClick: {
          status: "lxl-end",
        },
      },
      {
        content: "我脚踏实地",
        onClick: {
          status: "dc-end",
        },
      },
      {
        content: "我随波逐流",
        onClick: {
          status: "gl-end",
        },
      },
    ],
  },
];
