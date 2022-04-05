import { Box, Radio, RadioGroup, Slider, Text } from "@mantine/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

import { Botao, InputSearch, Subtitulo, Titulo } from "../../components";
import { useStyles } from "./style";

export const Pesquisa = () => {
  const { classes } = useStyles();
  const [tipoPesquisa, setTipoPesquisa] = useState<"receita" | "ingredientes">(
    "receita",
  );
  const [pesquisa, setPesquisa] = useState("");
  const [estrela, setEstrela] = useState(0);

  const handlePesquisa: React.ChangeEventHandler<HTMLInputElement> = (
    valor,
  ) => {
    setPesquisa(valor.currentTarget.value);
  };

  const handleTipoPesquisa = (e: "receita" | "ingredientes") => {
    setTipoPesquisa(e);
  };

  return (
    <aside className={classes.aside}>
      <Subtitulo texto="Pesquise" decoracaoLatel cor="vermelho" />

      <RadioGroup
        color={"vermelho"}
        mt="md"
        mb="md"
        value={tipoPesquisa}
        onChange={(e: "receita" | "ingredientes") => handleTipoPesquisa(e)}
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <InputSearch
        label="pesquisa"
        onChange={(e) => handlePesquisa(e)}
        value={pesquisa}
        placeholder="Ovo com areia"
        my="md"
      />

      <Box sx={{ display: "flex", gap: ".5rem" }}>
        {tipoPesquisa === "ingredientes" ? (
          <Botao cor="vermelho" uppercase>
            add ingrediente
          </Botao>
        ) : (
          ""
        )}
        <Botao cor="azul" uppercase>
          pesquisar
        </Botao>
      </Box>

      <Subtitulo
        texto="Filtros"
        decoracaoLatel
        cor="vermelho"
        mt="lg"
        mb="xl"
      />

      <Text weight="bold" color="azul">
        Tempo máximo
      </Text>
      <Slider
        color="vermelho"
        size="sm"
        radius="xl"
        mb="xl"
        marks={[
          { value: 15, label: "15 min" },
          { value: 60, label: "60 min" },
          { value: 90, label: "+1.5h" },
        ]}
        labelTransition="slide-up"
        labelTransitionDuration={300}
        max={90}
      />

      <div className={classes.estrelas}>
        <Text weight="bold" color="azul" align="left">
          Classificação minima
        </Text>
        <StarRatings
          rating={estrela}
          starRatedColor="#841c1c"
          changeRating={(num) => setEstrela(num)}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="20px"
        />
      </div>

      {/* <Subtitulo texto="categorias" decoracaoLatel cor="vermelho" /> */}
    </aside>
  );
};
