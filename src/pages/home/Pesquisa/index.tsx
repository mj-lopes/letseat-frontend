import { MouseEventHandler, useState } from "react";
import {
  RadioGroup,
  Radio,
  Text,
  Button,
  Box,
  Space,
  Badge,
  Group,
} from "@mantine/core";
import { InputSearch } from "../../../components";
import { useStyles } from "./style";
import { pegarTodasReceitas } from "../../../api";
import { useNavigate } from "react-router-dom";

export const Pesquisa = () => {
  const [value, setValue] = useState("receita");
  const [pesquisa, setPesquisa] = useState("");
  const [ingredientes, setIngredientes] = useState<string[]>([]);
  const { classes } = useStyles();
  const navigator = useNavigate();

  const handlerRemoveIngrediente: MouseEventHandler<HTMLDivElement> = (el) => {
    const ingrediente = el.currentTarget.innerText.toLocaleLowerCase();
    const newArrIngredientes = ingredientes.filter((el) => el !== ingrediente);

    setIngredientes(newArrIngredientes);
  };

  const handlerAdicionaIngrediente = () => {
    if (!ingredientes.includes(pesquisa)) {
      const pesquisaValue = pesquisa.toLocaleLowerCase().trim();
      setIngredientes([...ingredientes, pesquisaValue]);
    }
    setPesquisa("");
  };

  return (
    <Box className={classes.containerPesquisa}>
      <RadioGroup
        label={<Text weight="bold">Pesquisar por:</Text>}
        value={value}
        onChange={(e) => setValue(e)}
        color={"vermelho"}
        mb="md"
      >
        <Radio value="receita">Nome</Radio>
        <Radio value="ingredientes">Ingredientes</Radio>
      </RadioGroup>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          navigator("/receitas");
          const { url, options } = pegarTodasReceitas();
          const resp = await fetch(url, options).then((r) => r.json());

          console.log(resp);
        }}
      >
        <Box className={classes.barraDePesquisa}>
          <InputSearch
            label="Pesquisa"
            placeholder="Galinha com quiabo"
            onChange={({ currentTarget }) => setPesquisa(currentTarget.value)}
            value={pesquisa}
            sx={{ flex: "1" }}
          />
          {value === "ingredientes" ? (
            <Button
              color={"vermelho"}
              uppercase
              onClick={handlerAdicionaIngrediente}
            >
              Adicionar Ingrediente
            </Button>
          ) : (
            ""
          )}
          <Button color={"azul"} uppercase type="submit">
            Pesquisar
          </Button>
        </Box>
      </form>

      {value === "ingredientes" ? (
        <Box className={classes.containerBadgers} mt="lg">
          {ingredientes.map((el) => (
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
