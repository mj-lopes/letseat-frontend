import { Pagination } from "@mantine/core";
import React, { memo } from "react";

interface Ipaginacao {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

const pg = ({ total, page, onChange }: Ipaginacao) => {
  return (
    <Pagination
      total={total}
      page={page}
      onChange={onChange}
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
