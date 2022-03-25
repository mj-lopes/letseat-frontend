import React from "react";
import { Box, Container, Space, Text } from "@mantine/core";
import Whats from "../../assets/whatsapp 1.svg";
import FB from "../../assets/facebook.svg";
import IG from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import logobg from "../../assets/logo-bg.svg";
import { useStyle } from "./style";

export const Footer = () => {
  const { classes } = useStyle();

  return (
    <footer className={classes.footerContainer}>
      <img src={logobg} className={classes.footerBGImg} />

      <Container size={"xl"}>
        <Space sx={{ paddingTop: "2rem" }} />

        <Box className={classes.redeSociais}>
          <img src={Whats} />
          <img src={FB} />
          <img src={IG} />
          <img src={Twitter} />
        </Box>

        <Space my={"md"} />

        <Box className={classes.contatoContainer}>
          <Text color={"white"}>
            Rua Casa Caiu, 487, bairro Fisico, São Carlos, SP{" "}
          </Text>

          <span className={classes.contatoSeparador} />

          <Text color={"white"}>letseatSPBR@hotmail.com </Text>

          <span className={classes.contatoSeparador} />

          <Text color={"white"}>(99) 99999 9999</Text>
        </Box>

        <Box className={classes.footerCopyright}>
          <Text color={"white"} align="center" size="sm">
            Criado por: Marcos Júnior - Somente para fins pessoais Todas as
            imagens são de direito de seus respectivos autores
          </Text>
        </Box>
      </Container>
    </footer>
  );
};
