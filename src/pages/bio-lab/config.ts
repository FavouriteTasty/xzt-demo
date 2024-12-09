import { type IFrame } from "@/components/frame";

export const TEDSpeechConfig: IFrame[] = [
  {
    titles: [
      "21世纪是生物学的世纪",
      "在兴趣的驱动下，你选择了一门生物学实验课，下周就要开始实验了",
      "你决定 ...",
    ],
    choices: [
      {
        content:
          "提前在 Labster 在线模拟实验，使用 Scikit-learn 学习如何处理实验结果并展示",
        onClick: {
          AISkill: 10,
          status: "bachelor-paper",
        },
      },
      {
        content: "叮～观看清朝老片之生物实验",
        onClick: {
          status: "bachelor-paper",
        },
      },
    ],
  },
];
