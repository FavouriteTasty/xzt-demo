import { type IFrame } from "@/components/frame";

export const bachelorGraduation: IFrame[] = [
  {
    titles: ["毕业快乐！"],
    choices: [
      {
        content: "这一刻是最快乐的",
        onClick: {
          luck: 20,
        },
      },
    ],
  },
  {
    titles: ["接下来要去哪里？"],
    choices: [
      {
        content: "工作",
        onClick: {
          status: "byd-end",
        },
      },
      {
        content: "出国深造",
        onClick: {},
      },
      {
        content: "国内深造",
        onClick: {
          status: "domestic-learning",
        },
      },
    ],
  },
];
