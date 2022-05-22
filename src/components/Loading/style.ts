import { createStyles, keyframes } from "@mantine/core";

const rodandoAnime = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const useLoadingStyle = createStyles((tema) => ({
  BgVermelho: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: tema.colors.vermelho[4],
    zIndex: 1001,
  },
  BgAzul: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    backgroundColor: tema.colors.azul[4],
    zIndex: 10002,
  },
  BgBage: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    backgroundColor: "#f6f3e9",
    zIndex: 10003,
  },
  logo: {
    alignSelf: "center",
    position: "absolute",
  },

  detalhes: {
    alignSelf: "center",
    animation: `${rodandoAnime} 3s linear infinite`,
  },
}));
