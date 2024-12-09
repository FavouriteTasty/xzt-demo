import { type IFrame } from "@/components/frame";

export const inClassConfig: IFrame[] = [
  {
    titles: ["你在上宏观经济学", "老师讲的东西真的很有难度", "你应该 ..."],
    choices: [
      {
        content:
          "通过 Otter.ai 实时记录课堂内容并生成结构化笔记，结合 ChatGPT 理解复杂概念",
        onClick: {
          learning: 10,
          AISkill: 10,
          status: "ted-speech",
        },
      },
      {
        content: "记笔记、啃书本",
        onClick: {
          learning: 20,
          status: "ted-speech",
        },
      },
      {
        content: "Bilibili 大学启动！",
        onClick: {
          learning: 20,
          status: "ted-speech",
        },
      },
    ],
  },
];
