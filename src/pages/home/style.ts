import { createStyles } from "@mantine/core";
import homeBG from "../../assets/homeHeaderBG.png";

export const useStyles = createStyles(() => {
  return {
    imgBG: {
      background: `url(${homeBG}) no-repeat`,
      backgroundPosition: "center",
      height: "510px",
      margin: "auto",
    },
    tituloWrapper: {
      position: "relative",
      top: "260px",
    },
    containerHomePage: {
      img: {
        textAlign: "center",
        margin: "auto",
        "@media screen and (max-width: 1000px)": {
          maxHeight: "300px",
          maxWidth: "300px",
        },
      },
    },
  };
});
