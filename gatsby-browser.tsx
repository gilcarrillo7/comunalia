import React from "react";
import { AnimatePresence } from "framer-motion";

import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => {
  return <AnimatePresence mode="wait">{element}</AnimatePresence>;
};
