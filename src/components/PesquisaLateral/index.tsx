import React, { memo, useContext, useState } from "react";
import { Box, Drawer, Radio, RadioGroup, Text } from "@mantine/core";
import {
  BadgeIngrediente,
  Botao,
  InputSearch,
  Subtitulo,
  RatingEstrela,
  SliderPreparo,
} from "../../components";

import { GlobalContext } from "../../contextApi";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const Pesquisa = () => {
  const [input, setInput] = useState("");
  const [drawerEstaAberto, setDrawerEstaAberto] = useState(false);
  const global = useContext(GlobalContext);

  const screenMobile = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles({ mobile: screenMobile });

  const navigator = useNavigate();

  const handleSubmitPesquisa = () => {
    if (global.tipoPesquisa === "ingredientes") {
      navigator(`/pesquisa/ingredientes?page=1`);
    } else {
      navigator(`/pesquisa/${input}?page=1`);
    }
  };

  const handleToggleModal = () => {
    setDrawerEstaAberto((prev) => !prev);
  };

  const sidenavDisplay = () => (
    <aside className={classes.aside}>
      <Subtitulo decoracaoLatel cor="vermelho">
        Pesquise
      </Subtitulo>

      <RadioGroup
        color={"vermelho"}
        my="md"
        value={global.tipoPesquisa}
        onChange={(e: "receita" | "ingredientes") =>
          global.selecionarTipoPesquisa(e)
        }
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <InputSearch
        label="pesquisa"
        onChange={({ currentTarget }) => setInput(currentTarget.value)}
        value={input}
        placeholder="Ovo com areia"
        my="md"
      />

      {global.tipoPesquisa === "ingredientes" &&
      global.listaIngredientes.length ? (
        <BadgeIngrediente
          ingredientes={global.listaIngredientes}
          onClick={(ingrediente: string) =>
            global.removerIngrediente(ingrediente)
          }
        />
      ) : (
        ""
      )}

      <Box className={classes.wrapperBotoes}>
        {global.tipoPesquisa === "ingredientes" ? (
          <Botao
            cor="vermelho"
            uppercase
            onClick={() => global.addIngrediente(input)}
          >
            add ingrediente
          </Botao>
        ) : (
          ""
        )}
        <Botao cor="azul" uppercase fullWidth onClick={handleSubmitPesquisa}>
          pesquisar
        </Botao>
      </Box>

      <Subtitulo decoracaoLatel cor="vermelho" my="md">
        Filtros
      </Subtitulo>

      <Text weight="bold" color="azul">
        Tempo m??ximo
      </Text>

      <SliderPreparo
        valor={global.paramFiltro.tempoPreparo}
        onChange={(valor: number) =>
          global.alterarCampoFiltro("tempoPreparo", valor)
        }
      />

      <div className={classes.estrelas}>
        <Text weight="bold" color="azul" align="left">
          Classifica????o minima
        </Text>
        <RatingEstrela
          valor={global.paramFiltro.estrela}
          onChange={(valor: number) =>
            global.alterarCampoFiltro("estrela", valor)
          }
        />
      </div>
    </aside>
  );

  return screenMobile ? (
    <div className={classes.btnDrawer}>
      <Botao cor="vermelho" onClick={handleToggleModal}>
        =
      </Botao>
      <Drawer
        opened={drawerEstaAberto}
        onClose={handleToggleModal}
        className={classes.drawer}
        size={350}
      >
        {sidenavDisplay()}
      </Drawer>
    </div>
  ) : (
    sidenavDisplay()
  );
};

export const PesquisaLateral = memo(Pesquisa);
