import React from "react";
import { Typography } from "antd";

import "./PokeType.scss";

const { Text } = Typography;

export const PokeType = (props) => {
  return <Text className={["poke-type", `poke-type--${props.type}`]}>{props.children}</Text>;
};
