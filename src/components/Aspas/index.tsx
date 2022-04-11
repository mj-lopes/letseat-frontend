import React, { memo } from "react";
import aspas from "../../assets/aspas.svg";
import { useStyle } from "./style";

export const Component = () => {
  const { classes } = useStyle();
  return <img src={aspas} alt="Aspas" className={classes.aspas} />;
};

export const Aspas = memo(Component);
