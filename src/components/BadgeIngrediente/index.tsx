import { Badge, BadgeProps } from "@mantine/core";
import { memo } from "react";
import { useStyles } from "./style";

interface IBadgeIng extends BadgeProps<any> {
  ingredientes: string[];
  onClick: (ingrediente: string) => void;
}

export const BadgeIng = ({ ingredientes, onClick }: IBadgeIng) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      {ingredientes?.map((ingrediente) => (
        <Badge
          color="vermelho"
          onClick={() => onClick(ingrediente)}
          className={classes.badge}
          key={`ingrediente - ${ingrediente}`}
        >
          {`${ingrediente} x`}
        </Badge>
      ))}
    </div>
  );
};

export const BadgeIngrediente = memo(BadgeIng);
