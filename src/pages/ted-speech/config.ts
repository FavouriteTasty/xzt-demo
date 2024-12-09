import { type IFrame } from "@/components/frame";

export const TEDSpeechConfig: IFrame[] = [
  {
    titles: [
      "你是学校科技社的社长",
      "正在组织一次“AI与校园生活”主题的演讲活动",
      "你想要 ...",
    ],
    choices: [
      {
        content:
          "用ChatGPT生成完整的活动策划书，利用MidJourney和Canva AI生成宣传海报",
        onClick: {
          AISkill: 10,
          status: "bio-lab",
        },
      },
      {
        content: "自己努力（猜你会设计和画画）",
        onClick: {
          status: "bio-lab",
        },
      },
    ],
  },
];
