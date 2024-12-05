import { End } from "@/components/end";
import { type HTMLMotionProps } from "framer-motion";
import React, { type FC } from "react";

interface BYDEndProps extends HTMLMotionProps<"div"> {}

export const BYDEnd: FC<BYDEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <End
      title="结局二：迪子收留"
      contents={[
        "由于各种条件的限制，只能将继续深造的想法深深埋藏心底",
        "在秋招过后，喜提大厂 0 offer",
        "深陷自我怀疑之际，你之前一直看不上的比亚迪给了你保底的offer",
        "虽说坐落在深圳郊区坪山，但是你也不需要太多社交，再说，住远点还能省钱",
        "于是你欣然接受，梦想有朝一日在迪子积累多年后，可以像无数深圳梦的小老板一样，开个小厂，过上一年稳稳几百个的美好生活 ...",
      ]}
      imageSrc="/images/cs-working.png"
      {...rest}
    />
  );
};
