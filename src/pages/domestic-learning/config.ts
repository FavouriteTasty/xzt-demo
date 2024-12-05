import { type IFrame } from "@/components/frame";

export const domesticLearning: IFrame[] = [
  {
    titles: [
      "你选择国内深造",
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
    titles: [
      "你顺利在复旦攻读硕博",
      "你想怎样度过这第一段也是最后一段科研生活？",
    ],
    choices: [
      {
        content: "23正是拼的年纪 我选择 7x16",
        onClick: {
          status: "school-end",
        },
      },
      {
        content: "Work Life Balance 我选择 5x10",
        onClick: {
          status: "klm-end",
        },
      },
      {
        content: "人生苦短 及时行乐 我选择随心所欲",
        onClick: {
          status: "klm-end",
        },
      },
    ],
  },
];
