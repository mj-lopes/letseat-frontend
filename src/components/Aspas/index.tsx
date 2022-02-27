import React from "react";
import aspas from "../../assets/aspas.svg";
import { useStyle } from "./style";

export const Aspas = () => {
  const { classes } = useStyle();
  return <img src={aspas} alt="Aspas" className={classes.aspas} />;
};
