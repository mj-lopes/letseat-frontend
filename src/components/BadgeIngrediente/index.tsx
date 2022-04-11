import { Badge, BadgeProps } from "@mantine/core";
import { memo, MouseEventHandler, useState } from "react";

interface IBadgeIng extends BadgeProps<any> {
  children: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const BadgeIng = ({ children, onClick, ...props }: IBadgeIng) => {
  const [estaEncima, setEstaEncima] = useState(false);

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setEstaEncima(!false);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setEstaEncima(!true);
  };

  return (
    <Badge
      color="vermelho"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {!estaEncima ? children : "Excluir?"}
    </Badge>
  );
};

export const BadgeIngrediente = memo(BadgeIng);
