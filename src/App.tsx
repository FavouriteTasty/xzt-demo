import React, { type FC } from "react";
import { Home } from "./pages/home";
import { $UI } from "./store";
import { AnimatePresence } from "framer-motion";
import { MainBorder } from "./components/main-border";
import { Config } from "./pages/config";
import { HighSchool } from "./pages/high-school";
import { Prologue } from "./pages/prologue";
import { Coding } from "./pages/coding";

const App: FC = () => {
  const status = $UI.use((state) => state.status);

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
      </AnimatePresence>
    </MainBorder>
  );
};

export default App;
