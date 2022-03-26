import { ReactNode } from "react";
import { useStyles } from "./style";

interface IHighlight {
  children: ReactNode;
  corBG?: "escuro" | "claro";
}

export const Highlight = ({ children, corBG = "claro" }: IHighlight) => {
  const { classes } = useStyles({ corBG });

  return <span className={classes.highlight}>{children}</span>;
};
