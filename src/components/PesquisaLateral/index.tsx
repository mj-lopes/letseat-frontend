import React, { ChangeEvent, memo, useState } from "react";

import { Box, Radio, RadioGroup, Slider, Text } from "@mantine/core";
import StarRatings from "react-star-ratings";

import {
  BadgeIngrediente,
  Botao,
  InputSearch,
  Subtitulo,
} from "../../components";
import { useStyles } from "./style";

const Pesquisa = () => {
  const { classes } = useStyles();

  const [tipoPesquisa, setTipoPesquisa] = useState<"receita" | "ingredientes">(
    "receita",
  );
  const [listaIngredientes, setListaIngredientes] = useState<string[]>([]);

  const [paramFiltro, setParamFiltro] = useState({
    pesquisa: "",
    estrela: 0,
    sliderTempoPreparo: 0,
  });

  const handleChange = (
    valor: ChangeEvent<HTMLInputElement> | number,
    tipo: "pesquisa" | "estrela" | "sliderTempoPreparo",
  ) => {
    setParamFiltro((state) => ({
      ...state,
      [tipo]: typeof valor === "number" ? valor : valor.target.value,
    }));
  };

  const handleTipoPesquisa = (e: "receita" | "ingredientes") => {
    setTipoPesquisa(e);
  };

  const handleAddIngrediente = () => {
    if (!listaIngredientes.includes(paramFiltro.pesquisa)) {
      setListaIngredientes((state) => [...state, paramFiltro.pesquisa]);
    }
  };

  const handleExcluirIngrediente = () => {
    const novoArr = listaIngredientes.filter(
      (ingrediente) => ingrediente !== paramFiltro.pesquisa,
    );
    setListaIngredientes(novoArr);
  };

  return (
    <aside className={classes.aside}>
      <Subtitulo texto="Pesquise" decoracaoLatel cor="vermelho" />

      <RadioGroup
        color={"vermelho"}
        my="md"
        value={tipoPesquisa}
        onChange={(e: "receita" | "ingredientes") => handleTipoPesquisa(e)}
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <InputSearch
        label="pesquisa"
        onChange={(e) => handleChange(e, "pesquisa")}
        value={paramFiltro.pesquisa}
        placeholder="Ovo com areia"
        my="md"
      />

      {tipoPesquisa === "ingredientes"
        ? listaIngredientes.map((ingrediente) => (
            <BadgeIngrediente onClick={handleExcluirIngrediente}>
              {ingrediente}
            </BadgeIngrediente>
          ))
        : ""}

      <Box className={classes.wrapperBotoes}>
        {tipoPesquisa === "ingredientes" ? (
          <Botao cor="vermelho" uppercase onClick={handleAddIngrediente}>
            add ingrediente
          </Botao>
        ) : (
          ""
        )}
        <Botao cor="azul" uppercase fullWidth>
          pesquisar
        </Botao>
      </Box>

      <Subtitulo texto="Filtros" decoracaoLatel cor="vermelho" my="md" />

      <Text weight="bold" color="azul">
        Tempo máximo
      </Text>

      <Slider
        color="vermelho"
        size="sm"
        radius="xl"
        value={paramFiltro.sliderTempoPreparo}
        onChange={(valor) => handleChange(valor, "sliderTempoPreparo")}
        mb="xl"
        marks={[
          { value: 15, label: "15 min" },
          { value: 60, label: "60 min" },
          { value: 90, label: "+1.5h" },
        ]}
        label={`${paramFiltro.sliderTempoPreparo} min`}
        step={5}
        labelTransition="slide-up"
        labelTransitionDuration={300}
        max={90}
      />

      <div className={classes.estrelas}>
        <Text weight="bold" color="azul" align="left">
          Classificação minima
        </Text>
        <StarRatings
          rating={paramFiltro.estrela}
          starRatedColor="#841c1c"
          changeRating={(num) => handleChange(num, "estrela")}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="23px"
        />
      </div>
    </aside>
  );
};

export const PesquisaLateral = memo(Pesquisa);
