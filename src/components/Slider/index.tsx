import { Slider } from "@mantine/core";
import React, { memo } from "react";

interface ISlider {
  valor: number;
  onChange: (valor: number) => void;
}

const SL = ({ valor, onChange }: ISlider) => {
  return (
    <Slider
      color="vermelho"
      size="sm"
      radius="xl"
      value={valor}
      onChange={onChange}
      mb="xl"
      marks={[
        { value: 15, label: "15 min" },
        { value: 60, label: "60 min" },
        { value: 90, label: "+1.5h" },
      ]}
      label={`${valor} min`}
      step={5}
      labelTransition="slide-up"
      labelTransitionDuration={300}
      max={90}
    />
  );
};

export const SliderPreparo = memo(SL);
