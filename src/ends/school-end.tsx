import { Button } from "@/components/button";
import { Display } from "@/components/display";
import { $UI } from "@/store";
import { type HTMLMotionProps, motion } from "framer-motion";
import React, { type FC } from "react";

interface SchoolEndProps extends HTMLMotionProps<"div"> {}

export const SchoolEnd: FC<SchoolEndProps> = (props) => {
  const { ...rest } = props;

  return (
    <motion.div className="h-full w-full" {...rest}>
      <Display imageSrc="/images/school-end.png" noGrayscale noStatusBar>
        <div className="w-full h-full flex items-center justify-center">
          <div className="px-2 text-2xl">
            <div className="text-3xl">结局三：教职上岸</div>
            <div>
              全年无休的生活让你的 Google Scholar 在30岁那年终于突破了1000
            </div>
            <div>发表了 Nature 子刊的你拿到了一个长聘副教授的职位</div>
            <div>
              告别了飞升疾走的你，成为了新入学博士生的榜样，他人只看得到你的成功，可谁又知道你成功背后有多少泪与汗呢？
            </div>
            <div className="flex w-full items-center justify-center mt-12">
              <Button
                onClick={() => {
                  $UI.init();
                }}
              >
                再次重生
              </Button>
            </div>
          </div>
        </div>
      </Display>
    </motion.div>
  );
};
