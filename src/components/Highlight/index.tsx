import { ReactNode } from "react";
import { useStyles } from "./style";

interface IHighlight {
  children: ReactNode;
}

export const Highlight = ({ children }: IHighlight) => {
  const { classes } = useStyles();

  return <span className={classes.highlight}>{children}</span>;
};
