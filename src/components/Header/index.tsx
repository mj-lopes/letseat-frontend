import { Box, Container } from "@mantine/core";
import * as React from "react";
import { useStyles } from "./style";
import LogoMarca from "../../assets/logomarca.svg";

export const Header: React.FC = () => {
  const { classes: S_Header } = useStyles();

  return (
    <header className={S_Header.background}>
      <Container size={"xl"}>
        <Box component="div" className={S_Header.semiCirculo}>
          <Box component="a" className={S_Header.logo} href="/">
            <img src={LogoMarca} alt="Logo da Lets Eat" />
          </Box>
        </Box>
      </Container>
    </header>
  );
};
