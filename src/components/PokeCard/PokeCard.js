import React from "react";
import { Typography } from "antd";
import "./PokeCard.scss";

const { Text, Title } = Typography;

export const PokeCard = () => {
  return (
    <div className="pokedex-card">
      <a href="/">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="thumbnail pokemon" />
      </a>
      <div className="pokedex-card__content">
        <Text className="pokedex-card__number">#001</Text>
        <Title className="pokedex-card__name" level={3}>
          Bulbasaur
        </Title>
        <div className="pokedex-card__types">
          <Text>Grass</Text>
          <Text>Poison</Text>
        </div>
      </div>
    </div>
  );
};
