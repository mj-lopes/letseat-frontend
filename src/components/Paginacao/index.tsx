import { Pagination } from "@mantine/core";
import React, { memo, useContext } from "react";
import { GlobalContext } from "../../contextApi";

interface Ipaginacao {
  total: number;
}

const pg = ({ total }: Ipaginacao) => {
  const global = useContext(GlobalContext);

  return (
    <Pagination
      total={total}
      page={global.paramFiltro.page}
      onChange={(pg) => global.alterarCampoFiltro("page", pg)}
      spacing="sm"
      color="azul"
      sx={(theme) => ({
        ".mantine-Pagination-item": {
          marginBottom: "1rem",
          opacity: "0.8",
          transition: ".3s ease",
          border: "none",
          ":hover": {
            opacity: "1",
            backgroundColor: theme.colors.azul[2],
            color: "white",
            borderRadius: "8px",
          },
        },
        ".mantine-Pagination-active": {
          opacity: "1",
          transform: "scale(1.1)",
        },
        justifyContent: "center",
      })}
    />
  );
};

export const Paginacao = memo(pg);
