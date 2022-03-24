import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params, getRef) => {
  const cor = theme.colors.dark[8];

  return {
    search: {
      input: {
        fontSize: `1rem`,
        border: `3px solid ${theme.colors.vermelho[4]}`,
        color: `${cor} !important`,
        "::placeholder": {
          color: `${theme.colors.dark[0]} !important`,
        },
        transition: ".3s",

        ":hover, :focus-within": {
          borderColor: `${theme.colors.vermelho[4]}`,
        },
        ":focus-within": {
          boxShadow: `3px 1px  ${theme.colors.azul[2]}`,
        },
      },

      ".mantine-TextInput-error": {
        color: `${cor} !important`,
      },
    },
  };
});

export { useStyles };
