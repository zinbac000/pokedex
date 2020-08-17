import React from "react";
import { Row, Col, Typography, BackTop } from "antd";
import "./Pokedex.scss";
import { PokedexFilter } from "../../components/Pokedex/PokedexFilter/PokedexFilter";
import { PokedexResults } from "../../components/Pokedex/PokedexResults/PokedexResults";

const { Title } = Typography;

export const Pokedex = () => {
  return (
    <main className="pokedex-container">
      <Row justify="center">
        <Col className="pokedex-header" span={20} lg={16}>
          <Title level={1}>Pokédex</Title>
        </Col>
      </Row>
      <PokedexFilter />
      <PokedexResults />
      <BackTop visibilityHeight={100}>UP</BackTop>
    </main>
  );
};
