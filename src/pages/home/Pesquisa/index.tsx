import { MouseEventHandler, useState } from "react";
import { RadioGroup, Radio, Text, Button, Box, Badge } from "@mantine/core";
import { Botao, InputSearch } from "../../../components";
import { useStyles } from "./style";
import { pegarTodasReceitas } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../contextApi";

export const Pesquisa = () => {
  const [tipoPesquisa, setTipoPesquisa] = useState<"receita" | "ingredientes">(
    "receita",
  );
  const [pesquisa, setPesquisa] = useState("");
  const { classes } = useStyles();
  const navigator = useNavigate();
  const global = useContext(GlobalContext);

  const handlerRemoveIngrediente: MouseEventHandler<HTMLDivElement> = (el) => {
    const ingrediente = el.currentTarget.innerText.toLocaleLowerCase();
    const newArrIngredientes =
      global?.listaIngredientes.filter((el) => el !== ingrediente) || [];

    global?.setListaIngredientes(newArrIngredientes);
  };

  const handlerAdicionaIngrediente = () => {
    if (!global?.listaIngredientes.includes(pesquisa)) {
      const novoIngrediente = pesquisa.toLocaleLowerCase().trim();
      global?.setListaIngredientes((prevValue) => [
        ...prevValue,
        novoIngrediente,
      ]);
    }

    setPesquisa("");
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (tipoPesquisa === "ingredientes") {
      navigator("/ingredientes");
    } else {
      navigator(`/${pesquisa}`);
    }
  };

  return (
    <Box className={classes.containerPesquisa}>
      <RadioGroup
        label={<Text weight="bold">Pesquisar por:</Text>}
        value={tipoPesquisa}
        onChange={(e: "receita" | "ingredientes") => setTipoPesquisa(e)}
        color={"vermelho"}
        mb="md"
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <form onSubmit={handleFormSubmit}>
        <Box className={classes.barraDePesquisa}>
          <InputSearch
            label="Pesquisa"
            placeholder="Galinha com quiabo"
            onChange={({ currentTarget }) => setPesquisa(currentTarget.value)}
            value={pesquisa}
            sx={{ flex: "1" }}
          />
          {tipoPesquisa === "ingredientes" ? (
            <Botao
              cor={"vermelho"}
              uppercase
              onClick={handlerAdicionaIngrediente}
            >
              Adicionar Ingrediente
            </Botao>
          ) : (
            ""
          )}
          <Botao cor={"azul"} uppercase type="submit">
            Pesquisar
          </Botao>
        </Box>
      </form>

      {tipoPesquisa === "ingredientes" ? (
        <Box className={classes.containerBadgers} mt="lg">
          {global?.listaIngredientes.map((el) => (
            <Badge
              color={"vermelho"}
              onClick={handlerRemoveIngrediente}
              key={el}
            >
              {el}
            </Badge>
          ))}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
