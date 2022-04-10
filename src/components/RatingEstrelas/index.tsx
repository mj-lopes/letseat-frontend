import React, { memo } from "react";
import StarRatings from "react-star-ratings";

interface IEstrela {
  valor: number;
  onChange: (valor: number) => void;
}

const Estrela = ({ valor, onChange }: IEstrela) => {
  return (
    <StarRatings
      rating={valor}
      starRatedColor="#841c1c"
      changeRating={onChange}
      numberOfStars={5}
      starDimension="20px"
      starSpacing="23px"
    />
  );
};

export const RatingEstrela = memo(Estrela);
