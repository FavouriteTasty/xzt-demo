import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface DCEndProps extends HTMLMotionProps<"div"> {}

export const DCEnd: FC<DCEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局八：大厂结局"
      contents={[
        "出身C9的你，在港三新二拿到了PHD",
        "博士期间，辗转于各个国内大厂实习，虽然只发了5篇论文的你够不上天才少年/少女计划",
        "但是你也拿到了接近百万年薪的 offer，你很舒服地从博士阶段过渡到了上班阶段",
        "人生进入新阶段：大厂打工仔！",
      ]}
      imageSrc="/images/dc-end.png"
      {...rest}
    />
  );
};
