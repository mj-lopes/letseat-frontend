import { Card, CardSection, Image, Text } from "@mantine/core";
import React, { memo } from "react";
import { Receita } from "../../types/reseita";

interface ICard {
  receita: Receita;
}

const CD = ({ receita }: ICard) => {
  return (
    <Card radius="sm" withBorder shadow="sm">
      <CardSection>
        <Image
          src={receita.imgUrl}
          alt={receita.titulo}
          height="175px"
          withPlaceholder
        />
      </CardSection>
      <Text>{receita.titulo}</Text>
    </Card>
  );
};

export const CardReceita = memo(CD);
