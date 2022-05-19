import { createStyles } from "@mantine/core";

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
    width: "100vw",
    height: "100vh",
    position: "absolute",
    backgroundColor: "#f6f3e9",
    zIndex: 10003,
  },
}));
