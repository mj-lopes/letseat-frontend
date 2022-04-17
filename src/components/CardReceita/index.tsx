import {
  Box,
  Card,
  CardSection,
  Divider,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React, { memo } from "react";
import { Receita } from "../../types/reseita";
import prato from "../../assets/prato.svg";
import tempo from "../../assets/tempo.svg";

import { useStyle } from "./style";

interface ICard {
  receita: Receita;
}

const CD = ({ receita }: ICard) => {
  console.log(receita);
  const { classes } = useStyle();

  return (
    <Card className={classes.card}>
      <CardSection>
        <Image
          src={receita.imgUrl}
          alt={receita.titulo}
          height="175px"
          withPlaceholder
        />
      </CardSection>

      <div className={classes.estrela}>{receita.classificacao}</div>

      <Title className={classes.titulo} order={2}>
        {receita.titulo}
      </Title>
      <Text className={classes.categoria}>{receita.categoria}</Text>

      <CardSection>
        <Divider my="md" className={classes.divisor} />
      </CardSection>

      <Box className={classes.detalhesContainer}>
        <Box className={classes.detalhesItem}>
          <img src={prato} alt={`Serve ${receita.rendimento}`} />
          <Text>{receita.rendimento}</Text>
        </Box>

        <Divider orientation="vertical" className={classes.divisor} />

        <Box className={classes.detalhesItem}>
          <img
            src={tempo}
            alt={`Tempo de preparo de ${receita.preparo} minutos`}
          />
          <Text>{receita.preparo} MIN</Text>
        </Box>
      </Box>
    </Card>
  );
};

export const CardReceita = memo(CD);
