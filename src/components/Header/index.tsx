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
          <div className={S_Header.logo}>
            <img src={LogoMarca} alt="Logo da Lets Eat" />
          </div>
        </Box>
      </Container>
    </header>
  );
};
