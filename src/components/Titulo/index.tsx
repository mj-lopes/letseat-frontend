import { Title } from "@mantine/core";

export const Titulo = ({ texto }: { texto: string }) => (
  <Title
    align="center"
    sx={{
      color: "#003049",
      fontSize: "clamp(1rem, 1rem + 6vw, 4.5rem)",
    }}
  >
    {texto}
  </Title>
);
