import React, { type FC } from "react";
import { Home } from "./pages/home";
import { $UI } from "./store";
import { AnimatePresence } from "framer-motion";
import { MainBorder } from "./components/main-border";
import { Config } from "./pages/config";
import { HighSchool } from "./pages/high-school";
import { Prologue } from "./pages/prologue";
import { Coding } from "./pages/coding";
import { GroupStart } from "./pages/group-start";
import { GroupEnd } from "./pages/group-end";
import { BachelorPaper } from "./pages/bachelor-paper";
import { FDUEND } from "./ends/fdu-end";
import { BachelorGraduation } from "./pages/bachelor-graduation";
import { BYDEnd } from "./ends/byd-end";
import { SchoolEnd } from "./ends/school-end";
import { DomesticLearning } from "./pages/domestic-learning";
import { KLMEnd } from "./ends/klm-end";
import { ZBMKEnd } from "./ends/zbmk-end";
import { AbroadLearning } from "./pages/abroad-learning";
import { LXLEnd } from "./ends/lxl-end";
import { GLEnd } from "./ends/gl-end";
import { DCEnd } from "./ends/dc-end";
import { WWTEnd } from "./ends/wwt-end";

const App: FC = () => {
  const status = $UI.use((state) => state.status);
  const AIDepend = $UI.use((state) => state.AIDepend);

  return (
    <MainBorder>
      <AnimatePresence mode="wait">
        {status === "home" && <Home key="home" exit={{ opacity: 0 }} />}
        {status === "config" && <Config key="config" exit={{ opacity: 0 }} />}
        {status === "prologue" && (
          <Prologue key="prologue" exit={{ opacity: 0 }} />
        )}
        {status === "high-school" && (
          <HighSchool key="high-school" exit={{ opacity: 0 }} />
        )}
        {status === "coding" && <Coding key="coding" exit={{ opacity: 0 }} />}
        {status === "group-start" && (
          <GroupStart key="group-start" exit={{ opacity: 0 }} />
        )}
        {status === "group-end" && (
          <GroupEnd key="group-end" exit={{ opacity: 0 }} />
        )}
        {status === "bachelor-paper" && (
          <BachelorPaper key="bachelor-paper" exit={{ opacity: 0 }} />
        )}
        {status === "bachelor-graduation" && AIDepend < 60 && (
          <BachelorGraduation key="bachelor-graduation" exit={{ opacity: 0 }} />
        )}
        {status === "domestic-learning" && (
          <DomesticLearning key="domestic-learning" exit={{ opacity: 0 }} />
        )}
        {status === "abroad-learning" && (
          <AbroadLearning key="abroad-learning" exit={{ opacity: 0 }} />
        )}

        {/* ends */}
        {status === "bachelor-graduation" && AIDepend >= 60 && (
          <FDUEND key="fdu-end" exit={{ opacity: 0 }} />
        )}
        {status === "byd-end" && (
          <BYDEnd key="byd-lend" exit={{ opacity: 0 }} />
        )}
        {status === "school-end" && (
          <SchoolEnd key="school-end" exit={{ opacity: 0 }} />
        )}
        {status === "klm-end" && <KLMEnd key="klm-end" exit={{ opacity: 0 }} />}
        {status === "zbmk-end" && (
          <ZBMKEnd key="zbmk-end" exit={{ opacity: 0 }} />
        )}
        {status === "lxl-end" && <LXLEnd key="lxl-end" exit={{ opacity: 0 }} />}
        {status === "gl-end" && <GLEnd key="gl-end" exit={{ opacity: 0 }} />}
        {status === "dc-end" && <DCEnd key="dc-end" exit={{ opacity: 0 }} />}
        {status === "wwt-end" && <WWTEnd key="wwt-end" exit={{ opacity: 0 }} />}
      </AnimatePresence>
    </MainBorder>
  );
};

export default App;
