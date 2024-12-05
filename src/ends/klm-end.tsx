import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface KLMEndProps extends HTMLMotionProps<"div"> {}

export const KLMEnd: FC<KLMEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局四：烤冷面"
      contents={[
        "在科研门口徘徊，挂了一堆名但是没有一作的你，在求职中受到了很大的打击",
        "你的科研搭子门纷纷找到了很好的去处",
        "而你，我的朋友，选择切换赛道，用广泛的人脉和强大的内心，烤出了全国知名的冷面",
        "为广大科研民工下班后，提供了一份凝结爱与和平的烤冷面！",
        "你也靠着这门生意，1年提宝马，3年小别墅...",
      ]}
      imageSrc="/images/klm-end.png"
      {...rest}
    />
  );
};
