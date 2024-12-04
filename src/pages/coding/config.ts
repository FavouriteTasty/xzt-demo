import { type IFrame } from "@/components/frame";

export const codingConfig: IFrame[] = [
  {
    titles: [
      "你又又又成功考入了复旦大学！",
      "复旦大学要求每个学生必修一门编程语言，你的选择是",
    ],
    choices: [
      {
        content: "Python 这一世我要 All in AI ！",
        onClick: {
          learning: 10,
          AISkill: 10,
        },
      },
      {
        content: "其他乱七八糟的语言",
        onClick: {
          learning: 15,
          AISkill: 5,
        },
      },
    ],
  },
];
