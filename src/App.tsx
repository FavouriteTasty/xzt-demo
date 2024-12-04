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

        {/* ends */}
        {status === "bachelor-graduation" && AIDepend >= 60 && <FDUEND />}
      </AnimatePresence>
    </MainBorder>
  );
};

export default App;
