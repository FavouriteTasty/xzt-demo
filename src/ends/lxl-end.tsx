import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface LXLEndProps extends HTMLMotionProps<"div"> {}

export const LXLEnd: FC<LXLEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局六：AI 新势力"
      contents={[
        "不同于一般的同学，你慧眼如炬，选择加入早期的AI六小龙",
        "你对大模型的训练、微调和数据流处理熟稔于心",
        "每次同学聚会谈起大模型时，你总是侃侃而谈",
        "浑然不觉，北平的秋天，桌上的菜比平常凉的更早一些。",
      ]}
      imageSrc="/images/lxl-end.png"
      {...rest}
    />
  );
};
