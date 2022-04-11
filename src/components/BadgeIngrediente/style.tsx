import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, params) => {
  return {
    wrapper: {
      display: "flex",
      gap: ".5rem",
      flexWrap: "wrap",
    },
    badge: {
      ":hover": {
        cursor: "pointer",
      },
    },
  };
});
