import { TextInput, TextInputProps } from "@mantine/core";
import React from "react";
import { useStyles } from "./style";

interface ISearch extends TextInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  placeholder: string;
}

export const InputSearch = ({
  value,
  onChange,
  label,
  placeholder,
  ...props
}: ISearch) => {
  const { classes } = useStyles();

  return (
    <TextInput
      type="search"
      className={classes.search}
      aria-label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error="Utilize termos no singular para uma melhor pesquisa"
      {...props}
    />
  );
};
