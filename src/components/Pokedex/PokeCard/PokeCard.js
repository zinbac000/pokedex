import React from "react";
import { Typography } from "antd";
import "./PokeCard.scss";
import { PokeType } from "../PokeType/PokeType";

const { Text, Title } = Typography;

export const PokeCard = ({ thumbnailImage, thumbnailAltText, number, name, types, detailUrl }) => {
  const pokeTypes = types.map((type) => (
    <PokeType key={type} type={type}>
      {type}
    </PokeType>
  ));
  return (
    <div className="pokedex-card">
      <a href={`https://www.pokemon.com/${detailUrl}`} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailImage} alt={thumbnailAltText} />
      </a>
      <div className="pokedex-card__content">
        <Text className="pokedex-card__number">#{number}</Text>
        <Title className="pokedex-card__name" level={3}>
          {name}
        </Title>
        <div className="pokedex-card__types">{pokeTypes}</div>
      </div>
    </div>
  );
};
