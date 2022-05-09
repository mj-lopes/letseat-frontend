import React, { memo } from "react";

import {
  Box,
  Card,
  CardSection,
  Divider,
  Image,
  Text,
  Title,
} from "@mantine/core";

import { Receita } from "../../types/receita";

import prato from "../../assets/prato.svg";
import tempo from "../../assets/tempo.svg";

import { useStyle } from "./style";
import { Link } from "react-router-dom";

interface ICard {
  receita: Receita;
}

const CD = ({ receita }: ICard) => {
  const { classes } = useStyle();

  return (
    <Card
      className={classes.card}
      component={Link}
      to={`../receitas/receita/${receita._id}`}
    >
      <CardSection className={classes.imagemCard}>
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
        <Divider className={classes.divisor} sx={{ margin: "6px 0" }} />
      </CardSection>

      <CardSection>
        <Box className={classes.detalhesContainer}>
          <Box className={classes.detalhesItem}>
            <img src={prato} alt={`Serve ${receita.rendimento}`} />
            <Text>{receita.rendimento}</Text>
          </Box>

          <Divider
            orientation="vertical"
            className={classes.divisor}
            sx={{ height: "40px" }}
          />
          <Box className={classes.detalhesItem}>
            <img
              src={tempo}
              alt={`Tempo de preparo de ${receita.preparo} minutos`}
            />
            <Text>{receita.preparo} MIN</Text>
          </Box>
        </Box>
      </CardSection>
    </Card>
  );
};

export const CardReceita = memo(CD);
