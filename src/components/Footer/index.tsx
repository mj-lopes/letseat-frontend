import React from "react";
import { Box, Container, Space, Text } from "@mantine/core";
import Whats from "../../assets/whatsapp 1.svg";
import FB from "../../assets/facebook.svg";
import IG from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import logobg from "../../assets/logo-bg.svg";

export const Footer = () => {
  return (
    <footer
      style={{ background: "#B71000", position: "relative", zIndex: "-10" }}
    >
      <img
        src={logobg}
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: "-1",
        }}
      />
      <Container size={"xl"}>
        <Box sx={{ padding: "1rem 0" }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <img src={Whats} />
          <img src={FB} />
          <img src={IG} />
          <img src={Twitter} />
        </Box>
        <Box sx={{ padding: "1rem 0 " }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "1rem 0",
          }}
        >
          <Text color={"white"}>
            Rua Casa Caiu, 487, bairro Fisico, São Carlos, SP{" "}
          </Text>
          <span
            style={{
              width: "32px",
              height: "3px",
              background: "#820B00",
              display: "inline-block",
            }}
          />
          <Text color={"white"}>letseatSPBR@hotmail.com </Text>
          <span
            style={{
              width: "32px",
              height: "3px",
              background: "#820B00",
              display: "inline-block",
            }}
          />
          <Text color={"white"}>(99) 99999 9999</Text>
        </Box>

        <Box sx={{ maxWidth: "480px", padding: "2rem 0", margin: "auto" }}>
          <Text color={"white"} align="center">
            Criado por: Marcos Júnior - Somente para fins pessoais Todas as
            imagens são de direito de seus respectivos autores
          </Text>
        </Box>
      </Container>
    </footer>
  );
};
