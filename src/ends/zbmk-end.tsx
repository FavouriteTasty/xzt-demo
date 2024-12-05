import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface ZBMKEndProps extends HTMLMotionProps<"div"> {}

export const ZBMKEnd: FC<ZBMKEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局五：直播卖课"
      contents={[
        "穷得很稳定的你决心不再过这样的生活",
        "你决定降维打击，把 AI 推向千家万户，你买上了打光机、氛围灯和 iPhone 16 Pro Max",
        "信心满满地进入新赛道，你坚信 AI 赛道里没有人比你更懂直播！",
      ]}
      imageSrc="/images/zbmk-end.png"
      {...rest}
    />
  );
};
