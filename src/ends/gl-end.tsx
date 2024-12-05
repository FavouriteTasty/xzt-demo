import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface GLEndProps extends HTMLMotionProps<"div"> {}

export const GLEnd: FC<GLEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局七：归零结局"
      contents={[
        "在国外待了多年，花了家里300万的你，在博士快毕业的时候发现",
        "你能找到的国内工作年薪是30万人民币，不吃不喝需要干10年才能挣回来",
        "如果当时把出国的钱用于投资英伟达或者比特币，你们家此时应该在黄浦江边的豪宅里俯瞰芸芸众生",
        "而你，我的朋友，pk掉了无数对手，只为了一个30万的offer。",
      ]}
      imageSrc="/images/gl-end.png"
      {...rest}
    />
  );
};
