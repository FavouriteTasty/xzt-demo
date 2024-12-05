import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface WWTEndProps extends HTMLMotionProps<"div"> {}

export const WWTEnd: FC<WWTEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局九：华尔街之狼"
      contents={[
        "在哈佛你选择了AI+经济学方向大展宏图",
        "你左手UCLA助理教授offer，右手挽着你的 Mr/Miss Right",
        "身边围绕着各路王子和公主的你，就是名副其实的“华尔街之狼”",
      ]}
      imageSrc="/images/wwt-end.png"
      {...rest}
    />
  );
};
